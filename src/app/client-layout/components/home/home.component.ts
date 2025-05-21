import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedCardComponent } from "../../../shared-components/shared-card/shared-card.component";
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedCardComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HttpClient]
})
export class HomeComponent {
  projects: {
    videoSrc: string;
    navigationState: true,
    title: string;
    description: string;
    date: string;
    tags: string[];
    projectUrl: string;
    oppositeSideBorder?: boolean;
  }[] = [
      {
        videoSrc: './../../../../assets/video-samples/Tabs.mp4',
        navigationState: true,
        title: 'Animated Tab System',
        description: 'This code creates a responsive and interactive tab system with smooth animations. The interface features clickable tabs (Home, About, Blogs, Contact Us) that dynamically display corresponding content with a sliding underline effect.',
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/tabs'
      },
      {
        videoSrc: './../../../../assets/video-samples/background generator.mp4',
        navigationState: true,
        title: 'Dynamic Animated Blocks with Anime.js',
        description: 'An interactive animation using Anime.js that generates dynamic and colorful block movements across the screen with each click of a button. Perfect for experimenting with random transformations and creative UI effects.',
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/blocks'
      },
      {
        videoSrc: './../../../../assets/video-samples/text animation.mp4',
        navigationState: true,
        title: 'Animated Typing Text Effect',
        description: 'A smooth animated typing text effect using HTML, CSS, and JavaScript. Watch dynamic roles like Freelancer, Developer, and Designer appear one after another with a stylish cursor animation.',
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/animated-typing-text'
      },
      {
        videoSrc: './../../../../assets/video-samples/password generator.mp4',
        navigationState: true,
        title: 'Password Generator – Create Strong & Secure Passwords Instantly',
        description: 'A modern and interactive password generator built with HTML, CSS, and JavaScript. Easily customize your password with adjustable length and toggle options for uppercase letters, lowercase letters, numbers, and symbols. With a sleek UI and instant copy-to-clipboard functionality, this tool ensures you generate secure passwords tailored to your needs. Ideal for improving account security with just one click!',
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/password-generator-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/animated popup.mp4',
        navigationState: true,
        title: '🎛️ Interactive Expandable Card UI',
        description: 'A stylish, animated expandable card built using HTML, CSS, and JavaScript. Click the toggle button to smoothly reveal or hide content with beautiful scaling and transitions. Perfect for modern UI sections like tooltips, info cards, or onboarding guides. Fully responsive and customizable with sleek visuals and smooth user experience.',
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/animated-popup-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/menu indicator.mp4',
        navigationState: true,
        title: 'Animated Vertical Navigation Menu',
        description: 'A sleek animated vertical navigation menu with hover effects and dynamic background color changes using HTML, CSS, and JavaScript.',
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/menu-indicator-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/conic-gradient generator.mp4',
        navigationState: true,
        title: 'Interactive Conic-Gradient Pie Chart Generator',
        description: 'This project is a dynamic and responsive pie chart generator using CSS conic-gradient and vanilla JavaScript. Users can interactively add, remove, and customize chart segments by adjusting values and colors in real-time. The chart visually updates instantly and also displays the generated conic-gradient CSS code, making it both educational and functional for front-end developers learning about gradients and visual data representation.',
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/conic-gradient-generator'
      },
      {
        videoSrc: './../../../../assets/video-samples/loading-solar-system.mp4',
        navigationState: true,
        title: '🌍🌙 Interactive Solar System Animation with CSS',
        description: 'This project is a dynamic and responsive pie chart generator using CSS conic-gradient and vanilla JavaScript. Users can interactively add, remove, and customize chart segments by adjusting values and colors in real-time. The chart visually updates instantly and also displays the generated conic-gradient CSS code, making it both educational and functional for front-end developers learning about gradients and visual data representation.',
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/solar-system-loading'
      },
      {
        videoSrc: './../../../../assets/video-samples/3d cube.mp4',
        navigationState: true,
        title: '🧊 Interactive 3D Cube Grid Animation Using HTML, CSS & JavaScript',
        description: `
This project features a fully interactive 3D cube rendered using HTML, CSS, and JavaScript. Each face of the cube is made up of a 10×10 grid of dynamic cells that light up randomly with smooth glowing effects. Users can interact with the cube by moving the mouse, which rotates the cube in real-time based on cursor position.
This project is ideal for learning 3D transformations, animations, and interactive DOM manipulation.`,
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/interactive-box-3d'
      },
      {
        videoSrc: './../../../../assets/video-samples/clip-path scrolling.mp4',
        navigationState: true,
        title: '🌀 Scroll-Reveal Circular Image Animation',
        description: `A visually dynamic scrolling experience where images are revealed in a circular motion as the user scrolls down the page. Built using vanilla JavaScript, HTML, and CSS clip-path, each section animates smoothly based on scroll position, offering a creative storytelling or showcase layout. Ideal for portfolios, landing pages, or interactive storytelling designs.`,
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/clip-path-scrolling'
      },
      {
        videoSrc: './../../../../assets/video-samples/glassmorphism v1.mp4',
        navigationState: true,
        title: '✨ Glassmorphism UI Card',
        description: `A modern and minimal glassmorphism-style card built with HTML and CSS. Featuring a semi-transparent, frosted glass effect with blur and soft shadows, this UI component blends beautifully with vibrant backgrounds. Ideal for landing pages, portfolios, or any elegant web interface design that requires a sleek, futuristic look.`,
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/glassmorphism-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/3d card aniamtion.mp4',
        navigationState: true,
        title: '🖼️ 3D Rotating Image Carousel with Perspective Effect',
        description: `A sleek 3D carousel built using HTML, CSS, and vanilla JavaScript, showcasing a series of images with depth, perspective, and rotation. The central image appears in focus, while surrounding images are scaled and rotated to create a visually immersive experience. Users can cycle through images using intuitive navigation arrows. Transitions are smooth and reflect real-time DOM manipulation (appendChild / prepend) for an infinite looping slider effect. A great example of combining CSS transforms (translate3d, rotateY, scale) and JavaScript to create modern, interactive UI components without external libraries.`,
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/slider-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/text animation v2.mp4',
        navigationState: true,
        title: '🎨 Animated Text Stroke Reveal with Sliding Cursor Effect',
        description: `This creative animation uses a combination of -webkit-text-stroke and pseudo-elements (::before, ::after) to simulate a typewriter-style text reveal. The ::before element gradually fills the outlined "Hello" text with color using a keyframe animation, while the ::after element acts like a sliding cursor that travels across the text, enhancing the dynamic motion effect. Built with pure CSS and powered by the Poppins font, this design adds modern flair to simple headings.`,
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/text-stroke-fill-animation',
        oppositeSideBorder: true
      },
      {
        videoSrc: './../../../../assets/video-samples/text animation v3.mp4',
        navigationState: true,
        title: '🖋️ Animated SVG Stroke Text with Dashed Motion Effect',
        description: `This sleek SVG animation brings the text “Ibrahim Shafiq” to life with a dynamic dashed stroke effect. Using stroke-dasharray and stroke-dashoffset, the animation simulates continuous motion across the outlined text path. The design is fully responsive, centered on a dark background, and styled with the Poppins font for a modern, clean aesthetic. Ideal for signatures, logos, or intro screens.`,
        date: 'May 5, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/text-stroke-animation',
      },
    ];

  paginatedProjects: any[] = [];
  totalPages = 1;

  constructor(
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.paginationService.setCurrentPage(1);
    this.paginationService.setAllItems(this.projects.length);
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
    this.paginatedProjects = this.projects.slice(startIndex, endIndex);

    this.totalPages = Math.ceil(this.projects.length / itemsPerPage);
  }
}