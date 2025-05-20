import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedPopupV1Component } from './animated-popup-v1.component';

describe('AnimatedPopupV1Component', () => {
  let component: AnimatedPopupV1Component;
  let fixture: ComponentFixture<AnimatedPopupV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedPopupV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedPopupV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
