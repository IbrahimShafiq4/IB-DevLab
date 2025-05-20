import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStrokeFillAnimationComponent } from './text-stroke-fill-animation.component';

describe('TextStrokeFillAnimationComponent', () => {
  let component: TextStrokeFillAnimationComponent;
  let fixture: ComponentFixture<TextStrokeFillAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextStrokeFillAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextStrokeFillAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
