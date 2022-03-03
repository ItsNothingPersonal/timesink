import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'timesink-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  user: User | undefined;
  roles: string[] | undefined;

  constructor(private auth: AuthService) {
    this.auth.getUser().subscribe((user) => (this.user = user));
    this.auth.getIdTokenClaims().subscribe((token) => {
      if (token) {
        this.roles = token['http://timesink-dev-projects.net/roles'];
      }
    });
  }
}
