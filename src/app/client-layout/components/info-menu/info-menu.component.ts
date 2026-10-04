import {
  Component,
  ChangeDetectionStrategy,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-menu.component.html',
  styleUrl: './info-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoMenuComponent {

  readonly author = {
    name: 'إبراهيم شفيق',
    role: 'Full-Stack Engineer',
    stack: 'Angular · .NET · SQL Server',
    bio: 'مهندس برمجيات بخبرة +3 سنين في بناء تطبيقات ويب قابلة للتوسّع باستخدام Angular و ASP.NET Core.',
    social: [
      { icon: 'fa-brands fa-whatsapp', href: 'https://wa.me/01128467654?text=Hi%20Ibrahim', label: 'WhatsApp', tone: 'api' },
      { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/ibrahim-shafiq/', label: 'LinkedIn', tone: 'algo' },
      { icon: 'fa-brands fa-github', href: 'https://github.com/IbrahimShafiq4', label: 'GitHub', tone: 'ds' },
    ],
  };

  readonly repos = [
    { meta: 'fullstack', name: 'Full-Stack Projects', desc: 'Angular + ASP.NET Core', href: 'https://github.com/IbrahimShafiq4/FullStackProjects', line: 'algo' },
    { meta: 'realtime', name: 'SignalR Projects', desc: 'WebSockets · Live messaging', href: 'https://github.com/IbrahimShafiq4/SignalRProjects', line: 'ds' },
    { meta: 'mvc', name: 'MVC Projects', desc: 'Razor Views · EF Core', href: 'https://github.com/IbrahimShafiq4/MVCProjects', line: 'api' },
    { meta: 'portfolio', name: 'ملف الأعمال الكامل', desc: 'كل المشاريع في مكان واحد', href: 'https://ib-portfolio-indol.vercel.app/workspace', line: 'signal' },
  ];

  readonly stack = [
    { group: 'frontend', line: 'algo', tags: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'GSAP'] },
    { group: 'backend', line: 'ds', tags: ['C#', 'ASP.NET Core', 'EF Core', 'SignalR', 'SQL Server', 'REST'] },
    { group: 'architecture', line: 'api', tags: ['Clean Arch', 'SOLID', 'Design Patterns'] },
  ];
}