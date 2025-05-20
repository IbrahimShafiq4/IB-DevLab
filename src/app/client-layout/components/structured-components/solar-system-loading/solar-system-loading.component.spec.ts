import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarSystemLoadingComponent } from './solar-system-loading.component';

describe('SolarSystemLoadingComponent', () => {
  let component: SolarSystemLoadingComponent;
  let fixture: ComponentFixture<SolarSystemLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarSystemLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarSystemLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
