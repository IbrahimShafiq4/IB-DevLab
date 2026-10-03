import { Component } from '@angular/core';
import { SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';
import { SharedCardComponent } from "../../../../shared-components/shared-card/shared-card.component";

@Component({
  selector: 'app-html-css-js',
  imports: [SharedCodeComponent, SharedCodeComponent, SharedCardComponent],
  template: `
<section class="d-flex flex-column gap-1">
  <app-shared-code [isProjectHasNotAssists]="false" [projectName]="'{ HTML, CSS, JS } PROJECTS SHOWCASE'"
    projectDescription="A curated playlist of mini-projects built using HTML, CSS, and JavaScript. These projects range from beginner to intermediate level and demonstrate various UI/UX patterns, animations, and interactive elements. Perfect for sharpening core frontend skills."
    [projectOnYoutube]="'https://www.youtube.com/watch?v=9IXZ_qEvF-w&list=PL7S9lp7CuORZGO8goXg2462Cc3dWpisPI'" />

  <div class="row g-1">
    @for (project of projectsExplanations; track $index) {
    <div class="col-md-6 col-12">
        <app-shared-card [date]="project.date" [projectUrl]="project.projectUrl" [description]="project.description"
          [title]="project.title" [videoSrc]="project.thumbnail" [tags]="project.tags" />
    </div>
    }
  </div>
</section>
  `
})
export class HtmlCssJsComponent {
  projectsExplanations: {
    projectUrl: string;
    title: string,
    description: string;
    tags: string[],
    thumbnail: string;
    date: string;
    projectRouting: string;
  }[] = [
      {
        title: '🎨 Animated Conic Gradient Pie Chart with Legend',
        description: `This project showcases a visually appealing animated pie chart using pure HTML and CSS. The chart is built with conic-gradient to represent data segments in varying colors, and includes a dynamic rotation animation for enhanced visual engagement. A corresponding legend below the chart uses colored labels and percentage values to clearly describe each section. This component is ideal for dashboards or presentations where aesthetic and clarity are key.`,
        date: 'May 3, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: 'https://www.youtube.com/watch?v=yG76tp7NR20&list=PL7S9lp7CuORZGO8goXg2462Cc3dWpisPI&index=8',
        thumbnail: './../../../../assets/images/piechart.png',
        projectRouting: '/pie-chart'
      },
      {
        title: '📰 NEWS APP',
        description: `A news application built with modern frontend technologies. It fetches real-time news from an API and displays it in a clean and responsive layout. Key features include categorized news sections, search functionality, and embedded videos. Ideal for learning API integration and UI design.`,
        date: 'May 12, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS', 'API'],
        projectUrl: 'https://www.youtube.com/watch?v=9IXZ_qEvF-w&list=PL7S9lp7CuORbIPgqN7TrnlaboZ_Mos9TD',
        thumbnail: './../../../../assets/images/news app.gif',
        projectRouting: '/news-app'
      },
    ]
}
