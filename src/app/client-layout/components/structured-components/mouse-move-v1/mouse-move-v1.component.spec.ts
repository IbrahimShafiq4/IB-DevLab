import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseMoveV1Component } from './mouse-move-v1.component';

describe('MouseMoveV1Component', () => {
  let component: MouseMoveV1Component;
  let fixture: ComponentFixture<MouseMoveV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseMoveV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseMoveV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
