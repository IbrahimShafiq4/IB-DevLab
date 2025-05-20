import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCodeComponent } from './shared-code.component';

describe('SharedCodeComponent', () => {
  let component: SharedCodeComponent;
  let fixture: ComponentFixture<SharedCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
