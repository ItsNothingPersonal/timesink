import { Component } from '@angular/core';

@Component({
  selector: 'timesink-v20-da-rule-info-dice-and-difficulties',
  templateUrl: './v20-da-rule-info-dice-and-difficulties.component.html',
  styleUrls: ['./v20-da-rule-info-dice-and-difficulties.component.scss'],
})
export class V20DaRuleInfoDiceAndDifficultiesComponent {
  tableEmptyHeaders: string[] = [];

  tableDifficuliesRows: string[][] = [
    ['3', 'Trivial, probably not worth rolling'],
    ['4', 'Easy (following a clear and present trail)'],
    ['5', 'Straightforward (convincing the sympathetic)'],
    ['6', 'Standard (most average actions)'],
    ['7', 'Challenging (finding something on short time)'],
    ['8', 'Difficult (convincing an enemy)'],
    ['9', 'Extremely difficult (juggling weapons)'],
  ];

  tableDegreesOfSuccessRows: string[][] = [
    [
      '1',
      'Marginal; you get what you want, but at a cost, with potential consequences or imperfections',
    ],
    [
      '2',
      'Moderate; you get what you want, but with a cost, consequence, or imperfection',
    ],
    ['3', 'Complete; you get what you want within reason'],
    ['4', 'Exceptional; you get what you want, beyond expectations'],
    [
      '5',
      'Phenomenal; you perform with perfection, or you’ve created lasting greatness',
    ],
  ];
}
