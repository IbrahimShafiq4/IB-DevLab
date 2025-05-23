import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageScrollingComponent } from './image-scrolling.component';

describe('ImageScrollingComponent', () => {
  let component: ImageScrollingComponent;
  let fixture: ComponentFixture<ImageScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageScrollingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
