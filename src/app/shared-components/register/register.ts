import {
  Component,
  Input,
  ChangeDetectionStrategy,
  signal,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  ChangeDetectorRef
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

export interface RegisterSection {
  id: string;
  index: string;
  label: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) sections: RegisterSection[] = [];
  @Input() sticky = true;

  readonly activeId = signal<string | null>(null);
  readonly progress = signal(0);

  @ViewChildren('tick', { read: ElementRef })
  tickRefs?: QueryList<ElementRef<HTMLButtonElement>>;

  private observer?: IntersectionObserver;
  private scrollHandler?: () => void;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setupObserver();
    this.setupProgress();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();

    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) {
          this.activeId.set(visible.target.id);
          this.cdr.markForCheck();
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    this.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) this.observer?.observe(el);
    });
  }

  private setupProgress(): void {
    this.scrollHandler = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      this.progress.set(p);
      this.cdr.markForCheck();
    };
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.scrollHandler();
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}