import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginActivateGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated$.pipe(
      tap((loggedIn) => {
        if (!loggedIn) {
          this.authService.loginWithRedirect();
          return false;
        }

        return true;
      })
    );
  }
}
