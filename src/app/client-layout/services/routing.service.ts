import { Injectable } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private readonly activeRouteSubject = new BehaviorSubject<boolean>(false);
  public readonly isRouteActive$ = this.activeRouteSubject.asObservable();

  constructor(private router: Router) {
    this.setupRouteTracking();
  }

  private setupRouteTracking(): void {
    this.updateRouteState(this.router.url);

    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.updateRouteState(event.url);
      });
  }

  private updateRouteState(currentUrl: string): void {
    const isActive = this.checkIfRouteIsActive(currentUrl);
    this.activeRouteSubject.next(isActive);
  }

  private checkIfRouteIsActive(url: string): boolean {
    console.log(url)
    const cleanUrl = url.split('?')[0].split('#')[0];
    
    const segments = cleanUrl.split('/').filter(segment => segment !== '');
    
    if (segments.length === 0) return true;
    
    if (segments[0] === 'exp') return true;
    
    return false;
  }
}