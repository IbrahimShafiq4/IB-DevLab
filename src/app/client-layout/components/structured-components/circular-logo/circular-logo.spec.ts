import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularLogo } from './circular-logo';

describe('CircularLogo', () => {
  let component: CircularLogo;
  let fixture: ComponentFixture<CircularLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
