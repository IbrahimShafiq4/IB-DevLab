import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIndicatorV1Component } from './menu-indicator-v1.component';

describe('MenuIndicatorV1Component', () => {
  let component: MenuIndicatorV1Component;
  let fixture: ComponentFixture<MenuIndicatorV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuIndicatorV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIndicatorV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
