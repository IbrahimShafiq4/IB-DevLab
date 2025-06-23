import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropOfWater } from './drop-of-water';

describe('DropOfWater', () => {
  let component: DropOfWater;
  let fixture: ComponentFixture<DropOfWater>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropOfWater]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropOfWater);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
