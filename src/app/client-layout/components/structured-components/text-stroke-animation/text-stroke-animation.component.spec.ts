import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStrokeAnimationComponent } from './text-stroke-animation.component';

describe('TextStrokeAnimationComponent', () => {
  let component: TextStrokeAnimationComponent;
  let fixture: ComponentFixture<TextStrokeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextStrokeAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextStrokeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
