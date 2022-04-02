import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@timesink/ui';
import { V20DaRuleInfoDiceAndDifficultiesComponent } from './v20-da-rule-info-dice-and-difficulties/v20-da-rule-info-dice-and-difficulties.component';
import { V20DaRuleInfoFrenzyAndRoetschreckComponent } from './v20-da-rule-info-frenzy-and-roetschreck/v20-da-rule-info-frenzy-and-roetschreck.component';
import { V20DaRuleInfoRoadsAndDegenerationComponent } from './v20-da-rule-info-roads-and-degeneration/v20-da-rule-info-roads-and-degeneration.component';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [
    V20DaRuleInfoDiceAndDifficultiesComponent,
    V20DaRuleInfoFrenzyAndRoetschreckComponent,
    V20DaRuleInfoRoadsAndDegenerationComponent,
  ],
})
export class FeatureV20RuleInfoModule {}
