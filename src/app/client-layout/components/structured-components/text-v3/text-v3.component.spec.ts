import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextV3Component } from './text-v3.component';

describe('TextV3Component', () => {
  let component: TextV3Component;
  let fixture: ComponentFixture<TextV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextV3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
