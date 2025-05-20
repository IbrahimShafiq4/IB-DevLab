import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveBox3DComponent } from './interactive-box3-d.component';

describe('InteractiveBox3DComponent', () => {
  let component: InteractiveBox3DComponent;
  let fixture: ComponentFixture<InteractiveBox3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveBox3DComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveBox3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
