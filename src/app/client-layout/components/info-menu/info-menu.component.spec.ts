import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMenuComponent } from './info-menu.component';

describe('InfoMenuComponent', () => {
  let component: InfoMenuComponent;
  let fixture: ComponentFixture<InfoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
