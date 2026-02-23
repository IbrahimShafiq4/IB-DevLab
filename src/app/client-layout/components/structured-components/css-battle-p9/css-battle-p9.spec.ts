import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP9 } from './css-battle-p9';

describe('CssBattleP9', () => {
  let component: CssBattleP9;
  let fixture: ComponentFixture<CssBattleP9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function expect(component: CssBattleP9) {
  throw new Error('Function not implemented.');
}
