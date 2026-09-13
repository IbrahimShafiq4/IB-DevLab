import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP11 } from './css-battle-p11';

describe('CssBattleP11', () => {
  let component: CssBattleP11;
  let fixture: ComponentFixture<CssBattleP11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
