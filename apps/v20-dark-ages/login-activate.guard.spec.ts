import { TestBed } from '@angular/core/testing';
import { AuthService, IdToken, User } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { LoginActivateGuard } from './login-activate.guard';

export class MockAuthService {
  isAuthenticated$ = of(true);
  public loginWithRedirect(): void {
    return;
  }
  public getUser(): Observable<User> {
    return of({ name: 'Test', email: 'test@test.de' });
  }
  public getIdTokenClaims(): Observable<IdToken> {
    return of({ __raw: 'test', name: 'test', email: 'test@test.de' });
  }
}

describe('LoginActivateGuard', () => {
  let guard: LoginActivateGuard;
  let authMock: MockAuthService;

  beforeEach(() => {
    authMock = new MockAuthService();

    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authMock }],
    });
    guard = TestBed.inject(LoginActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if authenticated', () => {
    const loginSpy = jest.spyOn(authMock, 'loginWithRedirect');

    expect(loginSpy).not.toHaveBeenCalled();
    expect(guard.canActivate()).toBeTruthy();
  });

  it('should return false if not authenticated', () => {
    const loginSpy = jest.spyOn(authMock, 'loginWithRedirect');
    authMock.isAuthenticated$ = of(false);

    (guard.canActivate() as Observable<boolean>).subscribe((result) => {
      expect(loginSpy).toHaveBeenCalledTimes(1);
      expect(result).toBe(false);
    });
  });
});
