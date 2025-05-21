import { Component } from '@angular/core';
import { SharedCardComponent } from '../../../shared-components/shared-card/shared-card.component';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-exp',
  imports: [SharedCardComponent],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.scss'
})
export class ExpComponent {

  projectsExplanations: {
    projectUrl: string;
    title: string,
    description: string;
    tags: string[],
    thumbnail: string;
    date: string;
    projectRouting: string;
    id: string;
  }[] = [
      {
        title: '{ HTML, CSS, JS } PROJECTS SHOWCASE',
        description: `A curated playlist of mini-projects built using HTML, CSS, and JavaScript. These projects range from beginner to intermediate level and demonstrate various UI/UX patterns, animations, and interactive elements. Perfect for sharpening core frontend skills.`,
        date: 'May 3, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: 'https://www.youtube.com/watch?v=9IXZ_qEvF-w&list=PL7S9lp7CuORZGO8goXg2462Cc3dWpisPI',
        thumbnail: './../../../../assets/images/html-css-js.jpeg',
        projectRouting: '/html-css-js',
        id: 'html_js_id',
      },
      {
        title: '🎨 Animated Conic Gradient Pie Chart with Legend',
        description: `This project showcases a visually appealing animated pie chart using pure HTML and CSS. The chart is built with conic-gradient to represent data segments in varying colors, and includes a dynamic rotation animation for enhanced visual engagement. A corresponding legend below the chart uses colored labels and percentage values to clearly describe each section. This component is ideal for dashboards or presentations where aesthetic and clarity are key.`,
        date: 'May 3, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: 'https://www.youtube.com/watch?v=yG76tp7NR20&list=PL7S9lp7CuORZGO8goXg2462Cc3dWpisPI&index=8',
        thumbnail: './../../../../assets/images/piechart.png',
        projectRouting: '/pie-chart',
        id: 'pie-chart',
      },
      {
        title: '📰 NEWS APP',
        description: `A news application built with modern frontend technologies. It fetches real-time news from an API and displays it in a clean and responsive layout. Key features include categorized news sections, search functionality, and embedded videos. Ideal for learning API integration and UI design.`,
        date: 'May 12, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: 'https://www.youtube.com/watch?v=9IXZ_qEvF-w&list=PL7S9lp7CuORbIPgqN7TrnlaboZ_Mos9TD',
        thumbnail: './../../../../assets/images/news app.gif',
        projectRouting: '/news-app',
        id: 'news_app',
      },
    ]

  paginatedProjects: any[] = [];
  totalPages = 1;

  constructor(
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.paginationService.setCurrentPage(1);
    this.paginationService.setAllItems(this.projectsExplanations.length);
    this.paginationService.setItemsPerPage(4);
    this.paginationService.currentPage$.subscribe(page => {
      this.updatePaginatedProjects();
    });
    this.paginationService.itemsPerPage$.subscribe(() => {
      this.updatePaginatedProjects();
    });
    this.updatePaginatedProjects();
  }

  private updatePaginatedProjects() {
    const currentPage = this.paginationService.getCurrentPage();
    const itemsPerPage = this.paginationService.getItemsPerPage();

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    this.paginatedProjects = this.projectsExplanations.slice(startIndex, endIndex);

    this.totalPages = Math.ceil(this.projectsExplanations.length / itemsPerPage);
  }
}