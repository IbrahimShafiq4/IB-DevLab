import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP5 } from './css-battle-p5';

describe('CssBattleP5', () => {
  let component: CssBattleP5;
  let fixture: ComponentFixture<CssBattleP5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
