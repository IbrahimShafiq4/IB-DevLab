import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {
  STATIONS,
  Station,
  PracticeTest,
  LevelKey,
} from '../../core/stations.data';

interface TestResult {
  id: string;
  pass: boolean;
  actual?: unknown;
  expected?: unknown;
  error?: string;
}

@Component({
  selector: 'app-station-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './station-page.html',
  styleUrl: './station-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationPageComponent implements OnInit, OnDestroy {

  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('testFrameHost', { static: false })
  testFrameHost?: ElementRef<HTMLDivElement>;

  readonly station = signal<Station | null>(null);

  readonly runnableSrcdoc = computed<SafeHtml>(() => {
    const s = this.station();
    if (!s) return this.sanitizer.bypassSecurityTrustHtml('');
    return this.sanitizer.bypassSecurityTrustHtml(this.buildRunnableDoc(s));
  });

  readonly userCode = signal('');
  readonly timerRunning = signal(false);
  readonly elapsedMs = signal(0);
  readonly testResults = signal<TestResult[] | null>(null);
  readonly testError = signal<string | null>(null);
  readonly isTesting = signal(false);
  readonly showSolution = signal(false);

  private timerInterval?: ReturnType<typeof setInterval>;
  private timerStart?: number;

  readonly quizAnswers = signal<Record<number, number>>({});
  readonly quizRevealed = signal<Record<number, boolean>>({});

  ngOnInit(): void {
    const stationId = this.route.snapshot.data['stationId'] as string | undefined;
    if (!stationId) return;

    const found = STATIONS.find(s => s.id === stationId);
    if (!found) return;

    this.station.set(found);
    this.userCode.set(found.practice.starter);
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  private buildRunnableDoc(s: Station): string {
    const runnable = s.live;
    if (!runnable) {
      return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"></head><body></body></html>`;
    }

    const csp =
      "default-src 'none'; " +
      "style-src 'unsafe-inline'; " +
      "script-src 'unsafe-inline'; " +
      "img-src data:;";

    return `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<style>${runnable.css}</style>
</head>
<body>
${runnable.html}
<script>${runnable.js}<\/script>
</body>
</html>`;
  }

  onCodeInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.userCode.set(value);

    if (!this.timerRunning() && !this.testResults()) {
      this.startTimer();
    }
  }

  private startTimer(): void {
    this.timerRunning.set(true);
    this.timerStart = Date.now();
    this.timerInterval = setInterval(() => {
      if (this.timerStart) {
        this.elapsedMs.set(Date.now() - this.timerStart);
      }
    }, 100);
  }

  private stopTimer(): void {
    this.timerRunning.set(false);
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = undefined;
    }
  }

  formatElapsed(): string {
    const ms = this.elapsedMs();
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    const dec = Math.floor((ms % 1000) / 100);

    if (min > 0) {
      return `${min}:${sec.toString().padStart(2, '0')}.${dec}`;
    }
    return `${sec}.${dec}s`;
  }

  async runTests(): Promise<void> {
    const s = this.station();
    if (!s || this.isTesting()) return;

    if (!s.practice.functionName || s.practice.tests.length === 0) {
      this.testError.set('المحطة دي لسه مش جاهزة للاختبارات.');
      return;
    }

    this.isTesting.set(true);
    this.testError.set(null);
    this.testResults.set(null);
    this.stopTimer();

    try {
      const results = await this.executeInSandbox(
        this.userCode(),
        s.practice.functionName,
        s.practice.tests
      );
      this.testResults.set(results);
    } catch (err) {
      this.testError.set((err as Error).message);
    } finally {
      this.isTesting.set(false);
    }
  }

  private executeInSandbox(
    code: string,
    fnName: string,
    tests: PracticeTest[]
  ): Promise<TestResult[]> {
    return new Promise((resolve, reject) => {
      if (!isPlatformBrowser(this.platformId)) {
        reject(new Error('Sandbox غير متاح'));
        return;
      }

      const iframe = document.createElement('iframe');
      iframe.setAttribute('sandbox', 'allow-scripts');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const instanceId = 'st-' + Math.random().toString(36).slice(2);

      const handler = (e: MessageEvent) => {
        if (!e.data || e.data.__station !== instanceId) return;
        window.removeEventListener('message', handler);
        document.body.removeChild(iframe);
        clearTimeout(timeout);

        if (e.data.error) {
          reject(new Error(e.data.error));
        } else {
          resolve(e.data.results as TestResult[]);
        }
      };

      window.addEventListener('message', handler);

      const timeout = setTimeout(() => {
        window.removeEventListener('message', handler);
        if (iframe.parentNode) document.body.removeChild(iframe);
        reject(new Error('انتهت المهلة — يمكن فيه infinite loop في الكود'));
      }, 5000);

      const html = `<!doctype html><html><head><meta charset="utf-8"></head><body>
<script>
(function () {
  var INSTANCE = ${JSON.stringify(instanceId)};
  function send(data) {
    try { parent.postMessage(Object.assign({ __station: INSTANCE }, data), '*'); }
    catch (e) {}
  }

  try {
    ${code}

    var fn = typeof ${fnName} === 'function' ? ${fnName} : null;
    if (!fn) { send({ error: 'الدالة "${fnName}" مش موجودة' }); return; }

    var tests = ${JSON.stringify(tests)};
    var results = [];

    for (var i = 0; i < tests.length; i++) {
      var t = tests[i];
      try {
        var actual = fn.apply(null, t.args);
        var pass = JSON.stringify(actual) === JSON.stringify(t.expected);
        results.push({
          id: t.id,
          pass: pass,
          actual: actual,
          expected: t.expected
        });
      } catch (err) {
        results.push({
          id: t.id,
          pass: false,
          error: (err && err.message) || String(err)
        });
      }
    }

    send({ results: results });
  } catch (err) {
    send({ error: (err && err.message) || String(err) });
  }
})();
<\/script>
</body></html>`;

      iframe.srcdoc = html;
    });
  }

  toggleSolution(): void {
    this.showSolution.update(v => !v);
  }

  pickAnswer(questionIndex: number, optionIndex: number): void {
    if (this.quizRevealed()[questionIndex]) return;
    this.quizAnswers.update(m => ({ ...m, [questionIndex]: optionIndex }));
    this.quizRevealed.update(m => ({ ...m, [questionIndex]: true }));
  }

  isCorrect(questionIndex: number): boolean {
    const q = this.station()?.quizzes?.[questionIndex];
    if (!q) return false;
    return this.quizAnswers()[questionIndex] === q.correct;
  }

  reset(): void {
    const s = this.station();
    if (!s) return;

    this.userCode.set(s.practice.starter);
    this.testResults.set(null);
    this.testError.set(null);
    this.elapsedMs.set(0);
    this.stopTimer();
  }

  restartTimer(): void {
    this.elapsedMs.set(0);
    this.startTimer();
  }

  nextStationHref(): string {
    const s = this.station();
    if (!s?.next) return '/';
    const next = STATIONS.find(x => x.id === s.next);
    if (!next) return '/';
    return next.href; 
  }

  nextStationTitle(): string {
    const s = this.station();
    if (!s?.next) return '';
    return STATIONS.find(x => x.id === s.next)?.title ?? '';
  }

  lineHref(line: 'algo' | 'ds' | 'api'): string {
    if (line === 'algo') return '/algorithms';
    if (line === 'ds') return '/data-structures';
    return '/built-in-apis';
  }

  lineLabel(line: 'algo' | 'ds' | 'api'): string {
    if (line === 'algo') return 'الخط الأزرق';
    if (line === 'ds') return 'الخط الأحمر';
    return 'الخط الأخضر';
  }

  levelLabel(level: LevelKey): string {
    return level;
  }
}