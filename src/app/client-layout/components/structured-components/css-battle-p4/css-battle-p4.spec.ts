import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP4 } from './css-battle-p4';

describe('CssBattleP4', () => {
  let component: CssBattleP4;
  let fixture: ComponentFixture<CssBattleP4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
