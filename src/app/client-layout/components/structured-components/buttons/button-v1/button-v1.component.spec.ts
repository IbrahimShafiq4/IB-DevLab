import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonV1Component } from './button-v1.component';

describe('ButtonV1Component', () => {
  let component: ButtonV1Component;
  let fixture: ComponentFixture<ButtonV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
