import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextV4Component } from './text-v4.component';

describe('TextV4Component', () => {
  let component: TextV4Component;
  let fixture: ComponentFixture<TextV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextV4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
