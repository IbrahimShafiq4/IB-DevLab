import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltV1Component } from './tilt-v1.component';

describe('TiltV1Component', () => {
  let component: TiltV1Component;
  let fixture: ComponentFixture<TiltV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiltV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiltV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
