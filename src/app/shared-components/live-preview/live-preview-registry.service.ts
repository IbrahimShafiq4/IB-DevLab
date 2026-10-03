import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LivePreviewRegistry {
  private readonly MAX_CONCURRENT = 12;
  private readonly mounted = new Set<string>();
  private readonly waiting: Array<() => void> = [];

  tryMount(id: string, activate: () => void): boolean {
    if (this.mounted.has(id)) return true;

    if (this.mounted.size < this.MAX_CONCURRENT) {
      this.mounted.add(id);
      activate();
      return true;
    }

    this.waiting.push(() => {
      this.mounted.add(id);
      activate();
    });
    return false;
  }

  release(id: string): void {
    if (!this.mounted.has(id)) return;
    this.mounted.delete(id);

    const next = this.waiting.shift();
    if (next) next();
  }

  stats(): { mounted: number; queued: number } {
    return { mounted: this.mounted.size, queued: this.waiting.length };
  }
}