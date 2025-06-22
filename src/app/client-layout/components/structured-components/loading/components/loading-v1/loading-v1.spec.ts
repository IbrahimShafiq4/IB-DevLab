import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV1 } from './loading-v1';

describe('LoadingV1', () => {
  let component: LoadingV1;
  let fixture: ComponentFixture<LoadingV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
