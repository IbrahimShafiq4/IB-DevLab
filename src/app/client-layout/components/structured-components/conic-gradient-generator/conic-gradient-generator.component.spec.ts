import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConicGradientGeneratorComponent } from './conic-gradient-generator.component';

describe('ConicGradientGeneratorComponent', () => {
  let component: ConicGradientGeneratorComponent;
  let fixture: ComponentFixture<ConicGradientGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConicGradientGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConicGradientGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
