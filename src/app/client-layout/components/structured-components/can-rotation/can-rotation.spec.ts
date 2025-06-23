import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanRotation } from './can-rotation';

describe('CanRotation', () => {
  let component: CanRotation;
  let fixture: ComponentFixture<CanRotation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanRotation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanRotation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
