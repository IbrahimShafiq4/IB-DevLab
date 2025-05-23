import { Component, AfterViewInit, Input, inject, ComponentFactoryResolver, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.min.css';
import { EscapeHtmlPipe } from '../../client-layout/pipes/EscapeHtml.pipe';
import { CommonModule } from '@angular/common';
import { SharedVideoComponent } from "../shared-video/shared-video.component";
import { ActivatedRoute, Router } from '@angular/router';

export interface ICodeStructure {
  codeTitle: string | any;
  code: string
}

@Component({
  selector: 'app-shared-code',
  standalone: true,
  imports: [EscapeHtmlPipe, CommonModule],
  templateUrl: './shared-code.component.html',
  styleUrls: ['./shared-code.component.scss']
})
export class SharedCodeComponent implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();
  }
  isItCopied: boolean = false;

  @Input() HTMLCodeSnippet: ICodeStructure[] = [];
  @Input() CSSCodeSnippet: ICodeStructure[] = [];
  @Input() JSCodeSnippet: ICodeStructure[] = [];
  @Input() projectName: string = '';
  @Input() projectDescription: string = '';
  @Input() projectVersion: string = '';
  @Input() projectDate: string = '';
  @Input() zipFile: string = ''
  @Input() isProjectHasNotAssists: boolean = true;
  @Input() projectOnYoutube: string = '';
  @Input() project_demo: string = '';
  @Input() projectVideoSrc: string = '';

  @Input() tags: string[] = ['Web Development', 'HTML', 'CSS', 'JS', 'API'];

  private _ComponentFactoryResolver = inject(ComponentFactoryResolver);
  @ViewChild('popContainer', { read: ViewContainerRef, static: true }) popupContainer!: ViewContainerRef;
  @ViewChild('sourceElement') sourceElement!: ElementRef;

  private _Router: Router = inject(Router);
  private _ActivatedRoute: ActivatedRoute = inject(ActivatedRoute);

  scrollToSource() {
    setTimeout(() => {
      this.sourceElement.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }
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

  onCopy(text: string): void {
    this.isItCopied = !this.isItCopied;
    setTimeout(() => {
      this.isItCopied = !this.isItCopied
    }, 3000)

    navigator.clipboard.writeText(text);
  }

  async downloadZip() {
    try {
      const response = await fetch(this.zipFile);

      if (!response.ok) {
        throw new Error('File not found');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${this.projectName.replace(/\s+/g, '_')}.rar`;
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);

    } catch (error) {
      console.error('Download failed:', error);
      alert('Download unavailable. Please try again later.');
    }
  }

  onWatchDemo() {
    console.log('hello')

    this.popupContainer.clear();

    const componentRef = this.popupContainer.createComponent(SharedVideoComponent);

    componentRef.instance.videoTitle = this.projectName;
    componentRef.instance.videoDescription = this.projectDescription;
    componentRef.instance.videoSource = this.projectVideoSrc;
    componentRef.instance.zipFile = this.zipFile;

    componentRef.instance.closed.subscribe(() => {
      this.popupContainer.clear();
    });

    componentRef.instance.open();
  }

  onNavigateBack(): void {
    this._Router.navigate(['/'], { relativeTo: this._ActivatedRoute })
  }
}