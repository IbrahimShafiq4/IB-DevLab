import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltV2Component } from './tilt-v2.component';

describe('TiltV2Component', () => {
  let component: TiltV2Component;
  let fixture: ComponentFixture<TiltV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiltV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiltV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
