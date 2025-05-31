import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
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
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/tabs'
      },
      {
        videoSrc: './../../../../assets/video-samples/background generator.mp4',
        navigationState: true,
        title: 'Dynamic Animated Blocks with Anime.js',
        description: 'An interactive animation using Anime.js that generates dynamic and colorful block movements across the screen with each click of a button. Perfect for experimenting with random transformations and creative UI effects.',
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/blocks'
      },
      {
        videoSrc: './../../../../assets/video-samples/text animation.mp4',
        navigationState: true,
        title: 'Animated Typing Text Effect',
        description: 'A smooth animated typing text effect using HTML, CSS, and JavaScript. Watch dynamic roles like Freelancer, Developer, and Designer appear one after another with a stylish cursor animation.',
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/animated-typing-text'
      },
      {
        videoSrc: './../../../../assets/video-samples/password generator.mp4',
        navigationState: true,
        title: 'Password Generator – Create Strong & Secure Passwords Instantly',
        description: 'A modern and interactive password generator built with HTML, CSS, and JavaScript. Easily customize your password with adjustable length and toggle options for uppercase letters, lowercase letters, numbers, and symbols. With a sleek UI and instant copy-to-clipboard functionality, this tool ensures you generate secure passwords tailored to your needs. Ideal for improving account security with just one click!',
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/password-generator-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/animated popup.mp4',
        navigationState: true,
        title: '🎛️ Interactive Expandable Card UI',
        description: 'A stylish, animated expandable card built using HTML, CSS, and JavaScript. Click the toggle button to smoothly reveal or hide content with beautiful scaling and transitions. Perfect for modern UI sections like tooltips, info cards, or onboarding guides. Fully responsive and customizable with sleek visuals and smooth user experience.',
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/animated-popup-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/menu indicator.mp4',
        navigationState: true,
        title: 'Animated Vertical Navigation Menu',
        description: 'A sleek animated vertical navigation menu with hover effects and dynamic background color changes using HTML, CSS, and JavaScript.',
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/menu-indicator-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/conic-gradient generator.mp4',
        navigationState: true,
        title: 'Interactive Conic-Gradient Pie Chart Generator',
        description: 'This project is a dynamic and responsive pie chart generator using CSS conic-gradient and vanilla JavaScript. Users can interactively add, remove, and customize chart segments by adjusting values and colors in real-time. The chart visually updates instantly and also displays the generated conic-gradient CSS code, making it both educational and functional for front-end developers learning about gradients and visual data representation.',
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/conic-gradient-generator'
      },
      {
        videoSrc: './../../../../assets/video-samples/loading-solar-system.mp4',
        navigationState: true,
        title: '🌍🌙 Interactive Solar System Animation with CSS',
        description: 'This project is a dynamic and responsive pie chart generator using CSS conic-gradient and vanilla JavaScript. Users can interactively add, remove, and customize chart segments by adjusting values and colors in real-time. The chart visually updates instantly and also displays the generated conic-gradient CSS code, making it both educational and functional for front-end developers learning about gradients and visual data representation.',
        date: 'May 18, 2025',
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
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/interactive-box-3d'
      },
      {
        videoSrc: './../../../../assets/video-samples/clip-path scrolling.mp4',
        navigationState: true,
        title: '🌀 Scroll-Reveal Circular Image Animation',
        description: `A visually dynamic scrolling experience where images are revealed in a circular motion as the user scrolls down the page. Built using vanilla JavaScript, HTML, and CSS clip-path, each section animates smoothly based on scroll position, offering a creative storytelling or showcase layout. Ideal for portfolios, landing pages, or interactive storytelling designs.`,
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/clip-path-scrolling'
      },
      {
        videoSrc: './../../../../assets/video-samples/glassmorphism v1.mp4',
        navigationState: true,
        title: '✨ Glassmorphism UI Card',
        description: `A modern and minimal glassmorphism-style card built with HTML and CSS. Featuring a semi-transparent, frosted glass effect with blur and soft shadows, this UI component blends beautifully with vibrant backgrounds. Ideal for landing pages, portfolios, or any elegant web interface design that requires a sleek, futuristic look.`,
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/glassmorphism-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/3d card aniamtion.mp4',
        navigationState: true,
        title: '🖼️ 3D Rotating Image Carousel with Perspective Effect',
        description: `A sleek 3D carousel built using HTML, CSS, and vanilla JavaScript, showcasing a series of images with depth, perspective, and rotation. The central image appears in focus, while surrounding images are scaled and rotated to create a visually immersive experience. Users can cycle through images using intuitive navigation arrows. Transitions are smooth and reflect real-time DOM manipulation (appendChild / prepend) for an infinite looping slider effect. A great example of combining CSS transforms (translate3d, rotateY, scale) and JavaScript to create modern, interactive UI components without external libraries.`,
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/slider-v1'
      },
      {
        videoSrc: './../../../../assets/video-samples/text animation v2.mp4',
        navigationState: true,
        title: '🎨 Animated Text Stroke Reveal with Sliding Cursor Effect',
        description: `This creative animation uses a combination of -webkit-text-stroke and pseudo-elements (::before, ::after) to simulate a typewriter-style text reveal. The ::before element gradually fills the outlined "Hello" text with color using a keyframe animation, while the ::after element acts like a sliding cursor that travels across the text, enhancing the dynamic motion effect. Built with pure CSS and powered by the Poppins font, this design adds modern flair to simple headings.`,
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/text-stroke-fill-animation',
        oppositeSideBorder: true
      },
      {
        videoSrc: './../../../../assets/video-samples/text animation v3.mp4',
        navigationState: true,
        title: '🖋️ Animated SVG Stroke Text with Dashed Motion Effect',
        description: `This sleek SVG animation brings the text “Ibrahim Shafiq” to life with a dynamic dashed stroke effect. Using stroke-dasharray and stroke-dashoffset, the animation simulates continuous motion across the outlined text path. The design is fully responsive, centered on a dark background, and styled with the Poppins font for a modern, clean aesthetic. Ideal for signatures, logos, or intro screens.`,
        date: 'May 18, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/text-stroke-animation',
      },
      {
        videoSrc: './../../../../assets/video-samples/3d cubes.mp4',
        navigationState: true,
        title: '🔺 3D Animated Cube Grid with Interactive Highlighting',
        description: `This project features a dynamic 3D cube grid rendered using pure HTML, CSS (with advanced 3D transforms), and vanilla JavaScript. Each cube is composed of multiple layered span elements to simulate depth and lighting effects. The grid animates over time with randomly activated cubes that pop in or out based on their index. Each active cube uses CSS animations, color transitions, and shadow manipulations to create a vibrant, rotating highlight effect. The structure is fully responsive and demonstrates creative use of custom properties (--x, --y, --z) for positioning and animation control.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/cube',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading v1.mp4',
        navigationState: true,
        title: '🌈 Animated Neon Glow Loading Spinner',
        description: `A visually captivating, circular loading animation built entirely with HTML and CSS. This project showcases a div styled as a glowing spinner using a conic gradient and smooth 360° rotation, enhanced by a hue-rotating background that cycles through colors. The spinner displays a stylized “Loading” text in the center, complete with responsive hover effects that animate letter-spacing and box-shadow to give a pulsing neon glow.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/loading-v1',
      },
      {
        videoSrc: './../../../../assets/video-samples/mouse mvoe v1.mp4',
        navigationState: true,
        title: '🌀 Interactive Rotating Arrows Animation with CSS & JavaScript',
        description: `An engaging animation featuring 50 randomly placed arrows that dynamically rotate to follow the user's mouse position. Built with HTML, CSS, and vanilla JavaScript, this effect combines real-time geometry calculations (Math.atan2) with CSS transformations to create an immersive, responsive experience.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/mouse-move-v1',
      },
      {
        videoSrc: './../../../../assets/video-samples/mouse move v2.mp4',
        navigationState: true,
        title: '🧨 Mouse Trail Spark Effect with JavaScript and CSS',
        description: `An engaging animation featuring 50 randomly placed arrows that dynamically rotate to follow the user's mouse position. Built with HTML, CSS, and vanilla JavaScript, this effect combines real-time geometry calculations (Math.atan2) with CSS transformations to create an immersive, responsive experience.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/mouse-move-v2',
      },
      {
        videoSrc: './../../../../assets/video-samples/mouse move v3.mp4',
        navigationState: true,
        title: '💡 Dynamic Hover Ripple Boxes',
        description: `An interactive layout of colorful cards that respond to cursor movement with a ripple-like radial effect. Each card lights up from the exact point of the cursor using smooth transitions and custom highlight colors, creating an elegant and dynamic user experience with pure HTML, CSS, and JavaScript.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/mouse-move-v3',
      },
      {
        videoSrc: './../../../../assets/video-samples/tilt v1.mp4',
        navigationState: true,
        title: '3D Hover Navigation Menu with Tilt & Text Layering Effects',
        description: `An interactive 3D navigation menu built using HTML, CSS, and Vanilla Tilt.js. As users hover over the links, each text element visually pops with layered color effects and animated depth perception. The list fades to subtle opacity, highlighting only the hovered item. Designed with clean typography and immersive UI effects, this menu is perfect for futuristic or tech-themed websites.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/tilt-v1',
      },
      {
        videoSrc: './../../../../assets/video-samples/tilt v2.mp4',
        navigationState: true,
        title: '3D Tilt Card with Image & Profile Content',
        description: `This stylish 3D card component uses VanillaTilt.js to create a dynamic tilt effect on hover, enhancing interactivity and depth. The card features a clean layout with a profile image, name, and description, all wrapped in a modern container. Ideal for personal portfolios, profile showcases, or team member highlights, this UI component brings static content to life with smooth, elegant motion.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/tilt-v2',
      },
      {
        videoSrc: './../../../../assets/video-samples/tilt v3.mp4',
        navigationState: true,
        title: '3D Interactive Social Media Icons with Tilt & Color Hover Effects',
        description: `This vibrant UI component features a horizontal list of social media icons enhanced with VanillaTilt.js for a 3D tilt effect and dynamic color transitions on hover. Each icon uses a unique brand color (--clr) that changes the background of the entire page on hover, creating an engaging and responsive interaction. Perfect for portfolios, contact sections, or landing pages that need a creative social media touch.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/tilt-v3',
      },
      {
        videoSrc: './../../../../assets/video-samples/image scrolling.mp4',
        navigationState: true,
        title: 'Scroll-Reveal Pixel Explosion Effect',
        description: `This creative scroll animation disassembles an image into 400 pixel slices using JavaScript and CSS, scattering them randomly across the viewport. As the user scrolls down the page, each piece smoothly transitions back into its correct place, revealing the full image. This engaging effect is perfect for landing pages, intros, or interactive portfolios.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/image-scrolling',
      },
      {
        videoSrc: './../../../../assets/video-samples/text v3.mp4',
        navigationState: true,
        title: 'Native Dynamic Typing Animation with JavaScript',
        description: `This animated typing effect dynamically types and erases a set of descriptive words next to the word “JavaScript” using vanilla JavaScript. The design features a vibrant gradient background and a blinking cursor for a classic typing experience. Perfect for landing pages, portfolios, or banners to add personality and motion.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/text-v3',
      },
      {
        videoSrc: './../../../../assets/video-samples/text v4.mp4',
        navigationState: true,
        title: '🔤 Scroll-Reveal Text Animation with JavaScript and CSS',
        description: `This interactive scroll animation showcases a glowing text effect where each character in a paragraph becomes highlighted as you scroll down the page. Using only vanilla JavaScript and CSS transitions, this effect creates an engaging experience that draws attention to each letter dynamically. Perfect for portfolios, hero sections, or any project where visual storytelling matters.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/text-v4',
      },
      {
        videoSrc: './../../../../assets/video-samples/text animation v5.mp4',
        navigationState: true,
        title: 'Scroll-Reveal Name Animation with Glowing Text',
        description: `This scroll-triggered animation breaks the text “Ibrahim Shafiq” into individual characters and animates each letter from a random position into place as the user scrolls down. When activated, each letter glows with a neon green effect, creating a futuristic and dynamic user experience. Built using vanilla JavaScript and CSS transitions for lightweight performance.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/text-v5',
      },
      {
        videoSrc: './../../../../assets/video-samples/rains.mp4',
        navigationState: true,
        title: '🌈 Colorful Rains Animation with JavaScript and CSS',
        description: `This visual animation project creates a beautiful rain of glowing, colorful circles falling from the top of the screen. Each circle has a unique size and hue, simulating a magical "color rain" effect. The animation is built using vanilla JavaScript to dynamically generate elements and CSS for styling and smooth falling transitions. Ideal for landing pages, creative backgrounds, or coding showcases.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/rains',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading v2.mp4',
        navigationState: true,
        title: '🎨 Glowing Animated Name Loader',
        description: `This creative loader animation displays the name "IBRAHIM" with each letter glowing in different colors. The letters animate vertically with a smooth bounce effect and a neon-like glow, achieved using CSS keyframe animations and text stroke effects. Perfect for personal websites, portfolios, or creative loading screens to captivate visitors with stylish typography.`,
        date: 'May 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/loading-v2',
      },
      {
        videoSrc: './../../../../assets/video-samples/buttons/button v1.mp4',
        navigationState: true,
        title: '🎯 Animated Button Hover Effect with CSS',
        description: `This project demonstrates a sleek and modern hover animation for anchor (<a>) tags using pure HTML and CSS. The layout centers multiple buttons vertically and horizontally on the screen with a dark background. Each button features a smooth transition effect: when hovered, the background turns white, and the text appears to rise with a subtle transformation, giving a polished, interactive experience. Ideal for stylish landing pages or call-to-action elements.`,
        date: 'May 27, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/buttons/button-v1',
      },
      {
        videoSrc: './../../../../assets/video-samples/night mode/01 - night mode.mp4',
        navigationState: true,
        title: '🌗 Meme-Inspired Day/Night Mode Toggle',
        description: `A ✨ visually explosive and meme-worthy Day/Night mode toggle button that goes beyond the basics. Designed with gradient skies, glowing celestial elements, and a bouncy toggle animation, this button transforms from a bright, happy ☀️ day scene to a mysterious, starry 🌌 night`,
        date: 'May 30, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/night-mode/night-mode-v1',
      },
      {
        videoSrc: './../../../../assets/video-samples/night mode/02 night mode v2.mp4',
        navigationState: true,
        title: ' 🌗 Meme-Inspired Day/Night Mode Toggle – V2',
        description: `This isn't just a toggle—it’s a whole celestial performance. The Cosmic Chaos Edition takes the original meme-inspired concept and supercharges it with polished visuals, buttery-smooth transitions, and interstellar flair.`,
        date: 'May 31, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/night-mode/night-mode-v2',
      },
    ];

  paginatedProjects: any[] = [];
  totalPages = 1;

  constructor(
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('page_num')) {
      let page_num: number = Number(sessionStorage.getItem('page_num'))
      this.paginationService.setCurrentPage(page_num);
    } else {
      this.paginationService.setCurrentPage(1);
    }
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

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event): void {
    sessionStorage.clear();
    console.log('LocalStorage cleared before page unload');
  }

}