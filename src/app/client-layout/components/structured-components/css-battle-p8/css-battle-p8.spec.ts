import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP8 } from './css-battle-p8';

describe('CssBattleP8', () => {
  let component: CssBattleP8;
  let fixture: ComponentFixture<CssBattleP8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
