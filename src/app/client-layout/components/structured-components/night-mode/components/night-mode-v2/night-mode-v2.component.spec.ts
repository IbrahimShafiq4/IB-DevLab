import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightModeV2Component } from './night-mode-v2.component';

describe('NightModeV2Component', () => {
  let component: NightModeV2Component;
  let fixture: ComponentFixture<NightModeV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NightModeV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightModeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
