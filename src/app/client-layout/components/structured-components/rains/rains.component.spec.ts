import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainsComponent } from './rains.component';

describe('RainsComponent', () => {
  let component: RainsComponent;
  let fixture: ComponentFixture<RainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
