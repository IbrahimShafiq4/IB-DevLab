import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingV2 } from './loading-v2';

describe('LoadingV2', () => {
  let component: LoadingV2;
  let fixture: ComponentFixture<LoadingV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
