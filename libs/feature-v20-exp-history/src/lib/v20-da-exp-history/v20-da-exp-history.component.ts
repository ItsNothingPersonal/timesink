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
  ];
}
