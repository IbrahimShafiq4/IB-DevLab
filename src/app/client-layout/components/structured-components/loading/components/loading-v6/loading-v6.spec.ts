import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV6 } from './loading-v6';

describe('LoadingV6', () => {
  let component: LoadingV6;
  let fixture: ComponentFixture<LoadingV6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
