import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP2 } from './css-battle-p2';

describe('CssBattleP2', () => {
  let component: CssBattleP2;
  let fixture: ComponentFixture<CssBattleP2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
