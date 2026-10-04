import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { Database, ref, runTransaction } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {

  private readonly SESSION_KEY = 'ibdl:visited';

  private readonly platformId = inject(PLATFORM_ID);
  private readonly analytics = inject(Analytics);
  private readonly db = inject(Database);

  async trackVisit(): Promise<void> {
    try {
      logEvent(this.analytics, 'page_visit');
    } catch {
    }

    if (!isPlatformBrowser(this.platformId)) return;

    if (this.hasVisitedThisSession()) return;
    this.markVisited();

    try {
      const visitsRef = ref(this.db, 'visits');
      await runTransaction(visitsRef, (currentCount) => {
        return (currentCount || 0) + 1;
      });
    } catch {
    }
  }


  getVisitCount() {
    return ref(this.db, 'visits');
  }


  private hasVisitedThisSession(): boolean {
    try {
      return sessionStorage.getItem(this.SESSION_KEY) === '1';
    } catch {
      return false;
    }
  }

  private markVisited(): void {
    try {
      sessionStorage.setItem(this.SESSION_KEY, '1');
    } catch {
    }
  }
}