import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipPathScrollingComponent } from './clip-path-scrolling.component';

describe('ClipPathScrollingComponent', () => {
  let component: ClipPathScrollingComponent;
  let fixture: ComponentFixture<ClipPathScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipPathScrollingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipPathScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
