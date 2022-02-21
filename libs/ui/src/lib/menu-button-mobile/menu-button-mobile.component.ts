import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuButton } from '../menu-button';

@Component({
  selector: 'timesink-menu-button-mobile',
  templateUrl: './menu-button-mobile.component.html',
  styleUrls: ['./menu-button-mobile.component.scss'],
})
export class MenuButtonMobileComponent {
  @Input() menuButtons: MenuButton[] = [];

  @Input() showAuthButton = false;

  constructor(private router: Router) {}

  menuButtonClick(route: string | undefined, params: string[] | undefined) {
    if (!route) return;

    if (!params) {
      this.router.navigateByUrl(`/${route}`);
    } else {
      this.router.navigate([`/${route}`, ...params]);
    }
  }
}
