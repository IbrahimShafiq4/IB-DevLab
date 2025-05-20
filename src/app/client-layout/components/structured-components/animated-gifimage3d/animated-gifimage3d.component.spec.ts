import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedGIFImage3dComponent } from './animated-gifimage3d.component';

describe('AnimatedGIFImage3dComponent', () => {
  let component: AnimatedGIFImage3dComponent;
  let fixture: ComponentFixture<AnimatedGIFImage3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedGIFImage3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedGIFImage3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
