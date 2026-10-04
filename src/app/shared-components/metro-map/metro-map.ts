import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LivePreviewComponent } from '../live-preview/live-preview';
import { Station, LineKey, LINES, STATIONS } from '../../core/stations.data';

@Component({
  selector: 'app-metro-map',
  standalone: true,
  imports: [CommonModule, RouterModule, LivePreviewComponent],
  templateUrl: './metro-map.html',
  styleUrls: ['./metro-map.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetroMapComponent implements AfterViewInit, OnDestroy {

  @ViewChild('metroWrap', { static: false }) metroWrap?: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);

  /** Stations list — pulled from the shared data file (already bundled). */
  readonly stations = signal<Station[]>(STATIONS);
  readonly lines = LINES;

  readonly activeStation = signal<Station | null>(null);
  readonly ticketVisible = signal(false);
  readonly ticketX = signal(0);
  readonly ticketY = signal(0);

  readonly mapVisible = signal(false);
  private observer?: IntersectionObserver;

  readonly groupedStations = computed(() => {
    const groups: Record<LineKey, Station[]> = { algo: [], ds: [], api: [] };
    for (const s of this.stations()) groups[s.line].push(s);
    return groups;
  });

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    requestAnimationFrame(() => this.setupIntersectionObserver());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupIntersectionObserver(): void {
    const el = this.metroWrap?.nativeElement;
    if (!el || typeof IntersectionObserver === 'undefined') {
      this.mapVisible.set(true);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.mapVisible.set(true);
            this.observer?.disconnect();
            break;
          }
        }
      },
      { rootMargin: '100px 0px', threshold: 0.05 }
    );

    this.observer.observe(el);
  }

  buildPath(line: LineKey): string {
    const lineMeta = this.lines.find(l => l.key === line);
    if (!lineMeta) return '';
    const stationsInLine = this.stations().filter(s => s.line === line);
    if (stationsInLine.length < 2) return '';

    const sorted = [...stationsInLine].sort((a, b) => b.x - a.x);
    const startX = sorted[0].x;
    const endX = sorted[sorted.length - 1].x;
    return `M ${startX} ${lineMeta.y} L ${endX} ${lineMeta.y}`;
  }

  onStationEnter(station: Station, stationEl: SVGGElement): void {
    const wrap = this.metroWrap?.nativeElement;
    if (!wrap) return;

    const wrapRect = wrap.getBoundingClientRect();
    const stationRect = stationEl.getBoundingClientRect();

    const x = stationRect.left - wrapRect.left + stationRect.width / 2;
    const y = stationRect.bottom - wrapRect.top + 12;

    const ticketW = 320;
    const halfW = ticketW / 2;
    const safeX = Math.min(Math.max(x, halfW + 8), wrapRect.width - halfW - 8);

    this.activeStation.set(station);
    this.ticketX.set(safeX);
    this.ticketY.set(y);
    this.ticketVisible.set(true);

    this.cdr.markForCheck();
  }

  onStationLeave(): void {
    setTimeout(() => {
      if (!this.ticketVisible()) return;
      const ticketEl = this.metroWrap?.nativeElement.querySelector('.ticket:hover');
      if (!ticketEl) this.hideTicket();
    }, 200);
  }

  hideTicket(): void {
    this.ticketVisible.set(false);
    this.cdr.markForCheck();
  }

  onStationKeydown(event: KeyboardEvent, station: Station, el: SVGGElement): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onStationEnter(station, el);
    }
  }

  onMapLeave(event: MouseEvent): void {
    const related = event.relatedTarget as HTMLElement | null;
    if (related && related.closest('.ticket')) return;
    this.onStationLeave();
  }

  lineLabel(line: LineKey): string {
    return this.lines.find(l => l.key === line)?.label ?? '';
  }

  lineColorVar(line: LineKey): string {
    return this.lines.find(l => l.key === line)?.colorVar ?? '--ink-tertiary';
  }
}