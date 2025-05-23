import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseMoveV3Component } from './mouse-move-v3.component';

describe('MouseMoveV3Component', () => {
  let component: MouseMoveV3Component;
  let fixture: ComponentFixture<MouseMoveV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseMoveV3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseMoveV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
