import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLoaders } from './all-loaders';

describe('AllLoaders', () => {
  let component: AllLoaders;
  let fixture: ComponentFixture<AllLoaders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLoaders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLoaders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
