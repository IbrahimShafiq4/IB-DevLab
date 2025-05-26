import { Injectable } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { Database, ref, runTransaction } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {
  constructor(
    private analytics: Analytics,
    private db: Database
  ) {}

  async trackVisit() {
    logEvent(this.analytics, 'page_visit');
    
    const visitsRef = ref(this.db, 'visits');
    await runTransaction(visitsRef, (currentCount) => {
      return (currentCount || 0) + 1;
    });
  }

  getVisitCount() {
    return ref(this.db, 'visits');
  }
}