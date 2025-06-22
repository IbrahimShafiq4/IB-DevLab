import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV4 } from './loading-v4';

describe('LoadingV4', () => {
  let component: LoadingV4;
  let fixture: ComponentFixture<LoadingV4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
