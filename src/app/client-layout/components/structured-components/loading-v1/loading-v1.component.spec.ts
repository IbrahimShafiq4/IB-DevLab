import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV1Component } from './loading-v1.component';

describe('LoadingV1Component', () => {
  let component: LoadingV1Component;
  let fixture: ComponentFixture<LoadingV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
