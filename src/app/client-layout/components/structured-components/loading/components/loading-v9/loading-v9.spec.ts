import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV9 } from './loading-v9';

describe('LoadingV9', () => {
  let component: LoadingV9;
  let fixture: ComponentFixture<LoadingV9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
