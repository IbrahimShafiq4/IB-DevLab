import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightModeV1Component } from './night-mode-v1.component';

describe('NightModeV1Component', () => {
  let component: NightModeV1Component;
  let fixture: ComponentFixture<NightModeV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NightModeV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightModeV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
