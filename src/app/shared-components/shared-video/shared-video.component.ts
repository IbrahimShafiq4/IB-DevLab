import { Component, HostListener, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-video',
  standalone: true,
  imports: [],
  templateUrl: './shared-video.component.html',
  styleUrls: ['./shared-video.component.scss']
})
export class SharedVideoComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  @Input() videoSource: string = '';
  @Input() videoTitle: string = 'Project Demonstration';
  @Input() videoDescription: string = 'Watch the project in action';
  @Input() zipFile: string = '';
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();

  isOpen = false;

  open() {
    this.isOpen = true;

    setTimeout(() => {
      if (this.videoPlayer?.nativeElement) {
        this.videoPlayer.nativeElement.play().catch(e => {
          console.log('Autoplay prevented:', e);
          this.videoPlayer.nativeElement.controls = true;
        });
      }
    }, 300);
  }

  close() {
    this.isOpen = false;

    if (this.videoPlayer?.nativeElement) {
      this.videoPlayer.nativeElement.pause();
      this.videoPlayer.nativeElement.currentTime = 0;
    }

    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscKeydown() {
    if (this.isOpen) {
      this.close();
    }
  }
  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('video-dialog')) {
      this.close();
    }
  }

  download(type: string) {
    if (!this.videoSource || !this.zipFile) return;

    try {
      const link = document.createElement('a');
      link.href = type === 'video' ? this.videoSource : this.zipFile;
      link.download = type === 'video' ? this.videoTitle.replace(/\s+/g, '-').toLowerCase() + '.mp4' : this.videoTitle.replace(/\s+g/, '_').toLowerCase() + '.rar';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      type === 'video' ? console.error('Error downloading video:', error) : console.error('Error downloading File:', error);
    }
  }

  async shareVideo() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: this.videoTitle,
          text: this.videoDescription,
          url: window.location.href,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } else {
        prompt('Copy this link to share:', window.location.href);
      }
    } catch (error) {
      console.log('Sharing cancelled', error);
    }
  }
}