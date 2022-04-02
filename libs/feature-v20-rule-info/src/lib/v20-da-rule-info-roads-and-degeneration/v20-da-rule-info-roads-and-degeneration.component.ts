import { Component } from '@angular/core';

@Component({
  selector: 'timesink-v20-da-rule-info-roads-and-degeneration',
  templateUrl: './v20-da-rule-info-roads-and-degeneration.component.html',
  styleUrls: ['./v20-da-rule-info-roads-and-degeneration.component.scss'],
})
export class V20DaRuleInfoRoadsAndDegenerationComponent {
  tableRoadOfHumanityHeaders: string[] = [
    'Score',
    'Minimum Wrongdoing',
    'Rationale',
  ];
  tableRoadOfHumanityRows: string[][] = [
    ['10', 'Selfish thoughts', 'If it can be thought, it can be done.'],
    ['9', 'Minor selfish acts', 'Putting oneself first lets the Beast in.'],
    [
      '8',
      'Injury to another',
      'Accidental or not, there is still blood on your hands.',
    ],
    ['7', 'Theft', 'Only an animal takes without thought of consequence.'],
    [
      '6',
      'Accidental violation of another',
      'Humanity is a shared condition, his suffering is your own.',
    ],
    ['5', 'Wanton destruction', 'Are you a person or an animal?'],
    [
      '4',
      'Impassioned violation of another',
      'Passion behind violence is the whispering of the Beast.',
    ],
    [
      '3',
      'Planned violation of another',
      'To be so cold is to reject the warmth of humanity.',
    ],
    ['2', 'Casual violation of another', 'Even wild animals know better.'],
    ['1', 'The most monstrous, vile acts', 'Are you a person or a monster?'],
  ];

  tableRoadOfKingsHeaders: string[] = [
    'Score',
    'Minimum Wrongdoing',
    'Rationale',
  ];
  tableRoadOfKingsRows: string[][] = [
    [
      '10',
      'Forgoing your duty',
      'Those who do not maintain responsibilities often lose them.',
    ],
    [
      '9',
      'Treating a peer with disrespect',
      'Respect must be given to earn it from others.',
    ],
    [
      '8',
      'Placing personal desires over duty',
      'A leader must do what is best for the many, not the one.',
    ],
    [
      '7',
      'Treating an inferior as an equal',
      'Everyone should know their place, including you.',
    ],
    [
      '6',
      'Killing without purpose',
      'Displays of power should inspire fear or respect.',
    ],
    [
      '5',
      'Showing weakness in front of inferiors',
      'A leader must be strong at all times.',
    ],
    [
      '4',
      'Failing to answer a challenge to your honor',
      'Honor and reputation are everything.',
    ],
    [
      '3',
      'Treating your superior with disrespect',
      'Superiors must be given the respect they are due.',
    ],
    [
      '2',
      'Breaking your word or oath',
      'Your word is your honor. If you have no honor, you have no worth.',
    ],
    [
      '1',
      'Giving in to your Beast, such as frenzy',
      'If you cannot control yourself, how can you control others?',
    ],
  ];
}
