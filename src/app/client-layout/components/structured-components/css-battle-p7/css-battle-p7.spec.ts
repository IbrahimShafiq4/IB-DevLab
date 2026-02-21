import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBattleP7 } from './css-battle-p7';

describe('CssBattleP7', () => {
  let component: CssBattleP7;
  let fixture: ComponentFixture<CssBattleP7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBattleP7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBattleP7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
