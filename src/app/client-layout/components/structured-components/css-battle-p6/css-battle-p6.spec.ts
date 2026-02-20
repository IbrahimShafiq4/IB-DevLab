import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP6 } from './css-battle-p6';

describe('CssBattleP6', () => {
  let component: CssBattleP6;
  let fixture: ComponentFixture<CssBattleP6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
