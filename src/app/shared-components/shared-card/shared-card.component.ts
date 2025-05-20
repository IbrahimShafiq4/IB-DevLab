import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [DatePipe, CommonModule, RouterModule],
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  @Input() videoSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
  @Input() tags: string[] = [];
  @Input() visitText: string = 'Visit Project';
  @Input() projectUrl: string = '#';
  @Input() showShare: boolean = true;
  @Input() oppositeSideBorder: boolean | undefined = false;

  sharePlatforms: string[] = ['twitter', 'facebook', 'linkedin', 'whatsapp'];

  getTagIcon(tag: string): string {
    const iconMap: { [key: string]: { icon: string; type: 'solid' | 'brands' } } = {
      'Web Development': { icon: 'desktop', type: 'solid' },
      'HTML': { icon: 'html5', type: 'brands' },
      'CSS': { icon: 'css3-alt', type: 'brands' },
      'JS': { icon: 'js', type: 'brands' },
      'Angular': { icon: 'angular', type: 'brands' },
      'React': { icon: 'react', type: 'brands' },
      'Database': { icon: 'database', type: 'solid' },
      'API': { icon: 'server', type: 'solid' }
    };

    const defaultIcon = { icon: 'tag', type: 'solid' };
    const selected = iconMap[tag] || defaultIcon;

    return `fa-${selected.type} fa-${selected.icon}`;
  }

  playVideo(): void {
    this.videoPlayer.nativeElement.play();
  }

  pauseVideo(): void {
    this.videoPlayer.nativeElement.pause();
  }

  shareProject(platform: string): void {
    const shareUrl = encodeURIComponent(window.location.href + this.projectUrl.slice(1,));
    const shareText = encodeURIComponent(`Check out this project: ${this.title}`);

    const urls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      whatsapp: `https://wa.me/?text=${shareText}%20${shareUrl}`
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  }
}