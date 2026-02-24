import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP10 } from './css-battle-p10';

describe('CssBattleP10', () => {
  let component: CssBattleP10;
  let fixture: ComponentFixture<CssBattleP10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
