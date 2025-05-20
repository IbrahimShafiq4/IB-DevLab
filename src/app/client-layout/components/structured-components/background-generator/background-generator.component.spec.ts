import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundGeneratorComponent } from './background-generator.component';

describe('BackgroundGeneratorComponent', () => {
  let component: BackgroundGeneratorComponent;
  let fixture: ComponentFixture<BackgroundGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
