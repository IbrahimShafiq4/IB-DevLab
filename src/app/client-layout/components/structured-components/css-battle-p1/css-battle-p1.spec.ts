import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP1 } from './css-battle-p1';

describe('CssBattleP1', () => {
  let component: CssBattleP1;
  let fixture: ComponentFixture<CssBattleP1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
