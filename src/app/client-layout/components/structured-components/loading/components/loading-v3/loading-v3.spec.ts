import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV3 } from './loading-v3';

describe('LoadingV3', () => {
  let component: LoadingV3;
  let fixture: ComponentFixture<LoadingV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
