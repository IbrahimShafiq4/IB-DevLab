import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedVideoComponent } from './shared-video.component';

describe('SharedVideoComponent', () => {
  let component: SharedVideoComponent;
  let fixture: ComponentFixture<SharedVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
