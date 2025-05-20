import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderV1Component } from './slider-v1.component';

describe('SliderV1Component', () => {
  let component: SliderV1Component;
  let fixture: ComponentFixture<SliderV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
