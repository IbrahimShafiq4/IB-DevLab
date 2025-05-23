import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextV5Component } from './text-v5.component';

describe('TextV5Component', () => {
  let component: TextV5Component;
  let fixture: ComponentFixture<TextV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextV5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
