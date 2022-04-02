import { Component } from '@angular/core';

@Component({
  selector: 'timesink-v20-da-rule-info-frenzy-and-roetschreck',
  templateUrl: './v20-da-rule-info-frenzy-and-roetschreck.component.html',
  styleUrls: ['./v20-da-rule-info-frenzy-and-roetschreck.component.scss'],
})
export class V20DaRuleInfoFrenzyAndRoetschreckComponent {
  tableEmptyHeaders: string[] = [];

  tableFrenzyTriggersHeaders: string[] = ['Provocation', 'Difficulty'];
  tableFrenzyTriggersRows: string[][] = [
    ['Smell of blood when hungry', '3'],
    ['Sight of blood when hungry', '4'],
    ['Being harassed', '4'],
    ['Life-threatening situation', '4'],
    ['Malicious taunts', '4'],
    ['Physical provocation', '6'],
    ['Taste of blood when hungry', '6'],
    ['Loved one in danger', '7'],
    ['Outright public humiliation', '8'],
  ];

  tableRoetschreckHeaders: string[] = ['Provocation', 'Difficulty'];
  tableRoetschreckRows: string[][] = [
    ['Lighting a lamp', '3'],
    ['Sight of a torch', '5'],
    ['Bonfire', '6'],
    ['Obscured sunlight', '7'],
    ['Being burned', '7'],
    ['Direct sunlight', '8'],
    ['Trapped in burning building', '9'],
  ];
}
