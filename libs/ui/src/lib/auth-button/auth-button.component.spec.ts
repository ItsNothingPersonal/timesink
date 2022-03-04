import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService, IdToken, User } from '@auth0/auth0-angular';
import { of, Observable } from 'rxjs';
import { AuthButtonComponent } from './auth-button.component';

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

describe('AuthButtonComponent', () => {
  let component: AuthButtonComponent;
  let fixture: ComponentFixture<AuthButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthButtonComponent],
      providers: [{ provide: AuthService, useValue: new MockAuthService() }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
