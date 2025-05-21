import { Component, OnInit, OnDestroy, AfterViewInit, inject, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription, debounceTime } from 'rxjs';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  // projectTitles: { title: string, id: string }[] = [];
  // activeProjectIds: Set<string> = new Set(); // Track multiple active projects

  // private routerSub!: Subscription;
  // private paginationSub!: Subscription;
  // private observer: IntersectionObserver | null = null;
  // private initialized = false;
  // private updateScheduled = false;

  // private router = inject(Router);
  // private cdr = inject(ChangeDetectorRef);
  // private paginationService = inject(PaginationService);

  // ngOnInit(): void {
  //   this.setupRouterListener();
  //   this.setupPaginationListener();
  // }

  // ngAfterViewInit(): void {
  //   this.initialized = true;
  //   this.scheduleMenuUpdate();
  // }

  // ngOnDestroy(): void {
  //   this.cleanup();
  // }

  // private setupRouterListener(): void {
  //   this.routerSub = this.router.events
  //     .pipe(
  //       filter(event => event instanceof NavigationEnd),
  //       debounceTime(50)
  //     )
  //     .subscribe(() => {
  //       this.scheduleMenuUpdate();
  //     });
  // }

  // private setupPaginationListener(): void {
  //   this.paginationSub = this.paginationService.currentPage$
  //     .pipe(debounceTime(50))
  //     .subscribe(() => {
  //       this.scheduleMenuUpdate();
  //     });
  // }

  // private scheduleMenuUpdate(): void {
  //   if (!this.updateScheduled) {
  //     this.updateScheduled = true;
  //     requestAnimationFrame(() => {
  //       this.refreshMenu();
  //       this.updateScheduled = false;
  //     });
  //   }
  // }

  // private refreshMenu(): void {
  //   if (!this.initialized) return;

  //   this.cleanupObserver();
  //   this.collectProjectTitles();
  //   this.setupIntersectionObserver();
  //   this.cdr.markForCheck();
  // }

  // private collectProjectTitles(): void {
  //   const projectCards = Array.from(document.querySelectorAll<HTMLElement>('.project-card'));
  //   this.projectTitles = projectCards
  //     .filter(card => card.dataset['projectName'])
  //     .map(card => ({
  //       title: card.dataset['projectName']!,
  //       id: card.id || card.dataset['projectName']!
  //     }));
  // }

  // private setupIntersectionObserver(): void {
  //   this.observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       const element = entry.target as HTMLElement;
  //       const projectId = element.id || element.dataset['projectName'];

  //       if (entry.isIntersecting && projectId) {
  //         this.activeProjectIds.add(projectId);
  //         element.classList.add('in-view');
  //       } else {
  //         this.activeProjectIds.delete(projectId!);
  //         element.classList.remove('in-view');
  //       }
  //     });

  //     if (!this.updateScheduled) {
  //       this.updateScheduled = true;
  //       requestAnimationFrame(() => {
  //         this.cdr.markForCheck();
  //         this.updateScheduled = false;
  //       });
  //     }
  //   }, {
  //     threshold: 0.3,
  //     rootMargin: '0px 0px -30% 0px'
  //   });

  //   document.querySelectorAll<HTMLElement>('.project-card').forEach(card => {
  //     this.observer?.observe(card);
  //   });

  //   if (this.projectTitles.length > 0 && this.activeProjectIds.size === 0) {
  //     this.activeProjectIds.add(this.projectTitles[0].id);
  //   }
  // }

  // private cleanup(): void {
  //   this.cleanupObserver();
  //   this.routerSub?.unsubscribe();
  //   this.paginationSub?.unsubscribe();
  // }

  // private cleanupObserver(): void {
  //   this.observer?.disconnect();
  //   this.observer = null;
  // }

  // trackByFn(index: number, item: { title: string, id: string }): string {
  //   return item.id;
  // }

  // isActive(projectId: string): boolean {
  //   return this.activeProjectIds.has(projectId);
  // }
}