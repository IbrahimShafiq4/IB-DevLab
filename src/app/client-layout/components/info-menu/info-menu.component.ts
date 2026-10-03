import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { VisitorsService } from '../../services/visitors/visitors.service';

@Component({
  selector: 'app-info-menu',
  standalone: true,
  imports: [CommonModule],
  providers: [VisitorsService],
  templateUrl: './info-menu.component.html',
  styleUrl: './info-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoMenuComponent implements OnInit, OnDestroy {

  visitorCount = 0;

  private visitSub?: Subscription;
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly visitorsService = inject(VisitorsService);

  readonly stack = [
    { group: 'Frontend', tags: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'GSAP'] },
    { group: 'Backend', tags: ['C#', 'ASP.NET Core', 'EF Core', 'SignalR', 'SQL Server', 'REST'] },
    { group: 'Architecture', tags: ['Clean Arch', 'SOLID', 'Design Patterns'] }
  ];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.visitSub?.unsubscribe();
  }
}