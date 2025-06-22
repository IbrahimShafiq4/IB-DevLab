import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLayer } from './image-layer';

describe('ImageLayer', () => {
  let component: ImageLayer;
  let fixture: ComponentFixture<ImageLayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageLayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
