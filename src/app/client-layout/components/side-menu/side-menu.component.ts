import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  // projectTitles: { title: string }[] = [];
  // activeProjectName: string | null = null;

  // private cdr: ChangeDetectorRef = inject(ChangeDetectorRef)

  // ngAfterViewInit(): void {
  //   this.collectProjectTitles();
  //   this.intersectionTheItems();
  // }

  // collectProjectTitles(): void {
  //   const projectCards = document.querySelectorAll<HTMLElement>('.project-card');
  //   this.projectTitles = Array.from(projectCards)
  //     .map(card => {
  //       const title = card.dataset['projectName'];
  //       return title ? { title } : null;
  //     })
  //     .filter(Boolean) as { title: string }[];
  // }

  // intersectionTheItems(): void {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       const element = entry.target as HTMLElement;
  //       const projectName = element.dataset['projectName'];

  //       if (entry.isIntersecting && projectName) {
  //         this.activeProjectName = projectName;
  //         element.classList.add('in-view');
  //         this.cdr.detectChanges();
  //         setTimeout(() => this.cdr.detectChanges(), 0);
  //       } else {
  //         element.classList.remove('in-view');
  //       }
  //     });
  //   }, {
  //     threshold: 0.5,
  //     rootMargin: '0px 0px -20% 0px'
  //   });

  //   const projectCards = document.querySelectorAll<HTMLElement>('.project-card');
  //   projectCards.forEach(card => observer.observe(card));

  //   if (this.projectTitles.length > 0 && !this.activeProjectName) {
  //     this.activeProjectName = this.projectTitles[0].title;
  //     this.cdr.detectChanges();
  //   }
  // }

  // getActiveTab(projectName: string): boolean {
  //   const isActive = this.activeProjectName === projectName;
  //   console.log(`Checking ${projectName} against ${this.activeProjectName}: ${isActive}`);
  //   return isActive;
  // }
}
