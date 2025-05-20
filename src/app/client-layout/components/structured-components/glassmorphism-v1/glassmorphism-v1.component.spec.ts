import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassmorphismV1Component } from './glassmorphism-v1.component';

describe('GlassmorphismV1Component', () => {
  let component: GlassmorphismV1Component;
  let fixture: ComponentFixture<GlassmorphismV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassmorphismV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassmorphismV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
