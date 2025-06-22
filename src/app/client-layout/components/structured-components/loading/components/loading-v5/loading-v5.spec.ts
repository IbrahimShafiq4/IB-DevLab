import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV5 } from './loading-v5';

describe('LoadingV5', () => {
  let component: LoadingV5;
  let fixture: ComponentFixture<LoadingV5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
