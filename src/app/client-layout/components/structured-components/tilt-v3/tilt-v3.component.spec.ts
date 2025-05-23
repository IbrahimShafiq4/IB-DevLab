import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltV3Component } from './tilt-v3.component';

describe('TiltV3Component', () => {
  let component: TiltV3Component;
  let fixture: ComponentFixture<TiltV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiltV3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiltV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
