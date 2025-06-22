import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV7 } from './loading-v7';

describe('LoadingV7', () => {
  let component: LoadingV7;
  let fixture: ComponentFixture<LoadingV7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
