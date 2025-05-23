import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseMoveV2Component } from './mouse-move-v2.component';

describe('MouseMoveV2Component', () => {
  let component: MouseMoveV2Component;
  let fixture: ComponentFixture<MouseMoveV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseMoveV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseMoveV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
