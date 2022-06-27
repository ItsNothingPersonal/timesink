import { Component } from '@angular/core';

@Component({
  selector: 'timesink-v20-da-exp-history',
  templateUrl: './v20-da-exp-history.component.html',
  styleUrls: ['./v20-da-exp-history.component.scss'],
})
export class V20DaExpHistoryComponent {
  tableHeaders: string[] = ['Datum', 'Veränderung'];
  tableRows: string[][] = [
    ['14.02.2022', '+3'],
    ['28.02.2022', '+4'],
    ['21.03.2022', '+5'],
    ['04.04.2022', '+5'],
    ['02.05.2022', '+5'],
    ['16.05.2022', '+6'],
    ['30.05.2022', '+5'],
    ['13.06.2022', '+5'],
    ['27.06.2022', '+7'],
  ];
}
