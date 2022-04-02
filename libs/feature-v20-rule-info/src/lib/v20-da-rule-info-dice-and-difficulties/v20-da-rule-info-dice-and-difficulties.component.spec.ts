import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@timesink/ui';

import { V20DaRuleInfoDiceAndDifficultiesComponent } from './v20-da-rule-info-dice-and-difficulties.component';

describe('V20DaRuleInfoComponent', () => {
  let component: V20DaRuleInfoDiceAndDifficultiesComponent;
  let fixture: ComponentFixture<V20DaRuleInfoDiceAndDifficultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, UiModule],
      declarations: [V20DaRuleInfoDiceAndDifficultiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      V20DaRuleInfoDiceAndDifficultiesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
