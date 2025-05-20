import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCodePageComponent } from './shared-code-page.component';

describe('SharedCodePageComponent', () => {
  let component: SharedCodePageComponent;
  let fixture: ComponentFixture<SharedCodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCodePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedCodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
