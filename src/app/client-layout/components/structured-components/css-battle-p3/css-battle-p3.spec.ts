import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP3 } from './css-battle-p3';

describe('CssBattleP3', () => {
  let component: CssBattleP3;
  let fixture: ComponentFixture<CssBattleP3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
