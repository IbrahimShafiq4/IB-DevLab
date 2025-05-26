import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { RoutingService } from '../../services/routing.service';
import { Subscription } from 'rxjs';
import { Analytics } from '@angular/fire/analytics';
import { logEvent } from '@firebase/analytics';
import { VisitorsService } from '../../services/visitors/visitors.service';
import { onValue } from '@angular/fire/database';

@Component({
  selector: 'app-info-menu',
  imports: [],
  providers: [VisitorsService],
  templateUrl: './info-menu.component.html',
  styleUrl: './info-menu.component.scss'
})
export class InfoMenuComponent implements OnInit {
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 20;
  isPaginationActive: boolean = false;
  private routeSubscription?: Subscription;
  visitorCount: number = 0;

  constructor(
    private paginationService: PaginationService,
    private _RoutingService: RoutingService, private analytics: Analytics, private visitorsService: VisitorsService) { }


  trackAction() {
    logEvent(this.analytics, 'button_click', {
      button_name: 'demo_click'
    });
  }
  ngOnInit() {
    this.paginationService.currentPage$.subscribe(page => {
      this.currentPage = page;
    });

    this.paginationService.allItems$.subscribe(totalItems => {
      this.itemsPerPage = this.paginationService.getItemsPerPage();
      this.totalPages = Math.ceil(totalItems / this.itemsPerPage);
    });

    this.routeSubscription = this._RoutingService.isRouteActive$.subscribe(
      (isActive: boolean) => {
        this.isPaginationActive = isActive;
      }
    );

    this.trackAction()
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.paginationService.setCurrentPage(page);
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  getPageNumbers(): number[] {
    const pages = [];
    const maxVisiblePages = 5;

    if (this.totalPages <= maxVisiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, this.currentPage - 2);
      let end = Math.min(this.totalPages, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = end - maxVisiblePages + 1;
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  trackAndGetCount(): void {
    this.visitorsService.trackVisit();

    onValue(this.visitorsService.getVisitCount(), (snapshot) => {
      this.visitorCount = snapshot.val() || 0;
    });
  }
}
