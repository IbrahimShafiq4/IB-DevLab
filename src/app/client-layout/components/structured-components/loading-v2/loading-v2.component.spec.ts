import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV2Component } from './loading-v2.component';

describe('LoadingV2Component', () => {
  let component: LoadingV2Component;
  let fixture: ComponentFixture<LoadingV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
