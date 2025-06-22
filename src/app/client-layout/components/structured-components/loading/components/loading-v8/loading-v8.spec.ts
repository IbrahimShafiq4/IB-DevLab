import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV8 } from './loading-v8';

describe('LoadingV8', () => {
  let component: LoadingV8;
  let fixture: ComponentFixture<LoadingV8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
