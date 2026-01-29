import { ChangeDetectorRef, Component, HostListener, signal } from '@angular/core';
import { SharedCardComponent } from "../../../shared-components/shared-card/shared-card.component";
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationService } from '../../services/pagination.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedCardComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HttpClient],
  animations: [
    trigger('tabAnimation', [
      transition('* => *', [
        style({ 'will-change': 'transform, opacity' }),

        animate('10ms', style({ opacity: 0.9 })),

        query(':leave', [
          animate('10ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              opacity: 0,
              transform: 'translateY(5px)',
            }))
        ], { optional: true }),

        query(':enter', [
          style({
            opacity: 0,
            transform: 'translateY(-5px)'
          }),
          stagger(30, [
            animate('10ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              style({
                opacity: 1,
                transform: 'translateY(0)'
              }))
          ])
        ], { optional: true }),

        animate('10ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  activeTab = signal<'all' | 'cssbattle'>('all');

  filteredProjects: any[] = [];

  projects: {
    videoSrc: string;
    navigationState: boolean,
    title: string;
    description: string;
    date: string;
    tags: string[];
    projectUrl: string;
    oppositeSideBorder?: boolean;
    isItCssBattle?: boolean;
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
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/night-mode/night-mode-v2',
      },
      {
        videoSrc: './../../../../assets/video-samples/layers/01 - image layer.mp4',
        navigationState: true,
        title: ' 🎨 Image Layer Hover Effect with 3D Perspective 🖼️',
        description: `This HTML & CSS project creates a visually engaging 3D image layering effect using multiple copies of the same image. When hovered, the images separate in 3D space, giving a stacked-paper or parallax-like visual using transform: translate3d() and rotateX() for depth and angle. Each image fades out gradually with different opacities, enhancing the layered illusion.`,
        date: 'June 21, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/layers/image-layer',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading/01 - loading.mp4',
        navigationState: true,
        title: 'Creative CSS Blob Loader Animation – Version 1 💫',
        description: `This stylish loader animation features three rotating organic blob shapes 🌐 created using clever CSS border-radius tricks. Each span spins at different speeds and directions 🔃 to create a smooth, hypnotic, and fluid motion 🌀. In the center, a bold "Loading" text ⏳ clearly communicates the state to users.
Perfect for dark-themed interfaces 🌑, this animation is ideal for splash screens or data-fetching loaders, offering a modern look without any JavaScript ⚡. Lightweight, responsive, and visually appealing – just plug and play! 💻✨`,
        date: 'June 22, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/loading/loading-v1',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading/02 - loading.mp4',
        navigationState: true,
        title: 'Neon Trail Loader Animation – Version 2 ⚡',
        description: `This eye-catching CSS + JavaScript-powered loader creates a mesmerizing circular trail effect 🌌. Each loader consists of 20 glowing dots 💠 that rotate and animate in a ripple-like motion, leaving behind a neon trail. Thanks to the use of custom properties (--i, --j) and dynamic element generation via JavaScript, the animation is both flexible and visually rich.
Multiple rotating loaders layered with --j (indexing)
Glowing neon blue orbs 💙 using multiple box shadows
Smooth staggered animation with animation-delay for a flowing sequence
Great for tech-inspired or futuristic UIs 🚀
Perfect for async loading states, splash screens, or interactive preloaders that impress your users! 🔁🌐`,
        date: 'June 22, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/loading/loading-v2',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading/03 - loading.mp4',
        navigationState: true,
        title: 'Advanced Neon Spiral Loader – Version 3.0 ✨',
        description: `This enhanced loading animation takes a creative twist on the spiral effect 🌀. Built with pure JavaScript and CSS, it dynamically generates multiple layered loaders, each composed of 20 glowing orbs 💎. The orbs rotate around a center point, giving a sense of depth and motion, like a cyberpunk vortex 🌌.`,
        date: 'June 22, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/loading/loading-v3',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading/04 - loading.mp4',
        navigationState: true,
        title: 'Neon Spiral Loader – Version 4.0 💠',
        description: `This glowing neon spiral loader is built with pure JavaScript and CSS, dynamically generating a circular formation of 20 radiant orbs ✨ for each loader instance. Each orb rotates around a center point using the formula rotate(calc(18deg * var(--i) / 2)), forming a hypnotic half-density spiral 🌀 with smooth, trailing motion.`,
        date: 'June 22, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/loading/loading-v4',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading/05 - loading.mp4',
        navigationState: true,
        title: 'Emoji Pulse Spiral Loader – Version 5️.0 🌟',
        description: `This fun and creative loader brings a playful twist to animation by using emojis as moving particles 🎉. Each loader layer is made up of 20 rotating spans, with each span::before containing an emoji (👌) wrapped in a glowing white circle 💡. The emoji trails inward with a ripple effect, creating a vibrant spiral motion that’s both eye-catching and unique.`,
        date: 'June 22, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/loading/loading-v5',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading/06 - loading.mp4',
        navigationState: true,
        title: 'Diagonal Burst Spiral Loader – Version 6️.0 🌈',
        description: `This sleek and luminous loader introduces a diagonal spiral animation ✨ using rotate(calc(45deg * var(--i))), giving it a striking starburst-like appearance 🌠. Powered by JavaScript and CSS, each loader dynamically generates 20 glowing orbs 💠 that animate inwards with a trailing, light pulse.`,
        date: 'June 22, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/loading/loading-v6',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading/07 - loading.mp4',
        navigationState: true,
        title: 'Rotational Cross Spiral Loader – Version 6 Enhanced 🧊',
        description: `This stunning loader creates a four-directional spiral effect by rotating each .loader instance at 90° increments (rotate(calc(90deg * var(--j)))) 🔄. Combined with 20 rotating spans per loader, this forms a symmetrical cross-like motion 🧭—a powerful visual for modern UIs that want to stand out!`,
        date: 'June 22, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/loading/loading-v7',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading/08 - loading.mp4',
        navigationState: true,
        title: 'Tilted Spiral Neon Loader – Version 8️.0 🌪️',
        description: `This futuristic loader features a tilted spiral layout created using rotate(calc(90deg * var(--j) / 2)) 🌀. Unlike traditional right-angle symmetry, the / 2 factor gives the loader layers a diagonal twist 🧭—resulting in a smoother, off-axis rotation that feels dynamic and alive!`,
        date: 'June 22, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/loading/loading-v8',
      },
      {
        videoSrc: './../../../../assets/video-samples/loading/09 - loading.mp4',
        navigationState: true,
        title: 'Compact Rotating Spiral Loader – Version 9.0 🌌',
        description: `This version introduces a scaled-down spiral loader using scale(0.75) combined with four 90°-rotated layers (rotate(calc(90deg * var(--j)))), creating a tighter, crisper animation that is both minimal and futuristic 🌌.`,
        date: 'June 22, 2025',
        tags: ['Web Development', 'HTML', 'CSS', 'JS'],
        projectUrl: '/loading/loading-v9',
      },
      {
        videoSrc: './../../../../assets/video-samples/drop of water.mp4',
        navigationState: true,
        title: 'Soft Neumorphic Water Drop Animation – Pure CSS',
        description: `This animation simulates a floating water droplet using pure CSS, beautifully blending organic shapes, light reflections, and neumorphic shadows 🌫️. The bouncing motion creates a gentle rhythm, making it ideal for calm and modern UI designs.`,
        date: 'June 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/drop-of-water',
      },
      {
        videoSrc: './../../../../assets/video-samples/circular logo.mp4',
        navigationState: true,
        title: 'Conic Gradient Hover Buttons with Social Icons',
        description: `A sleek, modern button set featuring social media icons (LinkedIn, GitHub, Facebook) wrapped in interactive circular borders. When hovered, the buttons animate with a smooth conic gradient fill effect, giving a high-tech, dynamic glow around the icons. This effect is achieved using the experimental CSS @property feature, allowing a custom CSS variable (--fill) to transition seamlessly.`,
        date: 'June 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/circular-logo',
      },
      {
        videoSrc: './../../../../assets/video-samples/can rotation.mp4',
        navigationState: true,
        title: 'Rotational Image Pack Reveal Animation',
        description: `This animation creates a sleek and interactive image reveal effect using HTML and CSS. Two layered image elements are masked with a device mockup shape. On hover, the background image of the first "pack" smoothly shifts position, while the second image fades in — giving the illusion of a dynamic content switch or rotation inside the same device frame.
The effect combines background blending, mask-image, and background-position transitions to create a visually engaging UI component.`,
        date: 'June 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/can-rotation',
      },
      {
        videoSrc: './../../../../assets/video-samples/can rotation.mp4',
        navigationState: true,
        title: 'Rotational Image Pack Reveal Animation',
        description: `This animation creates a sleek and interactive image reveal effect using HTML and CSS. Two layered image elements are masked with a device mockup shape. On hover, the background image of the first "pack" smoothly shifts position, while the second image fades in — giving the illusion of a dynamic content switch or rotation inside the same device frame.
          The effect combines background blending, mask-image, and background-position transitions to create a visually engaging UI component.`,
        date: 'June 23, 2025',
        tags: ['Web Development', 'HTML', 'CSS'],
        projectUrl: '/can-rotation',
      },
      {
        videoSrc: './../../../../assets/video-samples/cssbattle/Piano.png',
        navigationState: false,
        title: 'CSS Battle – Layout Blocks Challenge',
        description: `CSS Battle challenge focused on recreating a block-based layout using pure HTML and CSS.
The solution relies on flexbox alignment, spacing, and solid background colors without images, SVGs, or JavaScript.`,
        date: 'June 23, 2025',
        tags: ['HTML', 'CSS', 'CSS Battle'],
        projectUrl: '/css_battle_P1',
        isItCssBattle: true,
      },
      {
        videoSrc: './../../../../../assets/video-samples/cssbattle/circle.png',
        navigationState: false,
        title: 'CSS Battle – Circular Shapes Challenge',
        description: `CSS Battle challenge built using layered circular div elements.
The design uses border-radius, positioning, and color contrast to recreate the target shape using pure CSS only.`,
        date: 'June 23, 2025',
        tags: ['HTML', 'CSS', 'CSS Battle'],
        projectUrl: '/css_battle_P2',
        isItCssBattle: true,
      },
      {
        videoSrc: './../../../../assets/video-samples/cssbattle/percentage.png',
        navigationState: false,
        title: 'CSS Battle – Percentage Symbol Challenge',
        description: `CSS Battle challenge recreating a percentage symbol using simple div elements.
The solution uses transforms, border-radius, and positioning without images, SVGs, or JavaScript.`,
        date: 'June 23, 2025',
        tags: ['HTML', 'CSS', 'CSS Battle'],
        projectUrl: '/css_battle_P3',
        isItCssBattle: true,
      },
      {
        videoSrc: './../../../../assets/video-samples/cssbattle/reflect_1.png',
        navigationState: false,
        title: 'CSS Battle – Sticks Reflection Challenge',
        description: `CSS Battle challenge using a single HTML element with CSS reflection.
The design relies on -webkit-box-reflect and pseudo-elements to create mirrored shapes and curved details.`,
        date: 'June 23, 2025',
        tags: ['HTML', 'CSS', 'CSS Battle'],
        projectUrl: '/css_battle_P4',
        isItCssBattle: true,
      },
      {
        videoSrc: './../../../../assets/video-samples/cssbattle/reflect_2.png',
        navigationState: false,
        title: 'CSS Battle – Advanced Reflection Shapes',
        description: `Advanced CSS Battle challenge combining reflection techniques with pseudo-elements.
The layout is created using pure CSS, focusing on positioning, borders, and shape construction.`,
        date: 'June 23, 2025',
        tags: ['HTML', 'CSS', 'CSS Battle'],
        projectUrl: '/css_battle_P5',
        isItCssBattle: true,
      }
    ];

  paginatedProjects: any[] = [];
  totalPages = 1;

  constructor(
    private paginationService: PaginationService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.initializeFromSessionStorage();
    this.setupPagination();
    this.updateFilteredProjects();
  }

  private initializeFromSessionStorage() {
    if (sessionStorage.getItem('page_num')) {
      let page_num: number = Number(sessionStorage.getItem('page_num'));
      this.paginationService.setCurrentPage(page_num);
    } else {
      this.paginationService.setCurrentPage(1);
    }

    const savedTab = sessionStorage.getItem('activeTab');
    if (savedTab === 'cssbattle' || savedTab === 'all') {
      this.activeTab.set(savedTab as 'all' | 'cssbattle');
    }
  }

  private setupPagination() {
    this.paginationService.setAllItems(this.filteredProjects.length);
    this.paginationService.setItemsPerPage(4);

    this.paginationService.currentPage$.subscribe(() => {
      this.updatePaginatedProjects();
    });

    this.paginationService.itemsPerPage$.subscribe(() => {
      this.updatePaginatedProjects();
    });
  }

  private updateFilteredProjects() {
    if (this.activeTab() === 'cssbattle') {
      this.filteredProjects = this.projects.filter(project => project.isItCssBattle === true);
    } else {
      this.filteredProjects = this.projects;
    }

    this.paginationService.setAllItems(this.filteredProjects.length);
    this.paginationService.setCurrentPage(1);
    this.updatePaginatedProjects();
  }

  private updatePaginatedProjects() {
    const currentPage = this.paginationService.getCurrentPage();
    const itemsPerPage = this.paginationService.getItemsPerPage();

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    this.paginatedProjects = this.filteredProjects.slice(startIndex, endIndex);

    this.totalPages = Math.ceil(this.filteredProjects.length / itemsPerPage);
  }

  changeTab(tab: 'all' | 'cssbattle'): void {
    if (this.activeTab() === tab) return;

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        this.performTabChange(tab);
      });
    } else {
      this.performTabChange(tab);
    }
  }

  private performTabChange(tab: 'all' | 'cssbattle'): void {
    this.activeTab.set(tab);
    sessionStorage.setItem('activeTab', tab);
    this.updateFilteredProjects();
    this.cdr.detectChanges();
  }
}