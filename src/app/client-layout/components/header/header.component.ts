import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeMenu: boolean = false;
  private _Router: Router = inject(Router);

  @HostListener('window:click', ['$event']) onMouseClick(event: MouseEvent) {
    const elRef = event.target as HTMLElement;
    const isHamburger = elRef.classList.contains('hamburger-menu') ||
      elRef.closest('.hamburger-menu');
    const isPopupMenu = elRef.classList.contains('popup-menu') ||
      elRef.closest('.popup-menu');

    if (!isHamburger && !isPopupMenu) {
      this.activeMenu = false;
    }
  }

  onNavigate(route: string): void {
    this._Router.navigateByUrl(route);
    this.activeMenu = false;
  }
}