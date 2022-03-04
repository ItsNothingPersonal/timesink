import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService, IdToken, User } from '@auth0/auth0-angular';
import { V20DaHomeComponent } from '@timesink/feature-v20-home';
import { UiModule } from '@timesink/ui';
import { of, Observable } from 'rxjs';
import { AppComponent } from './app.component';

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

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: AuthService, useValue: new MockAuthService() }],
      imports: [
        BrowserAnimationsModule,
        UiModule,
        RouterTestingModule.withRoutes([
          { path: '', component: V20DaHomeComponent },
        ]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'v20-dark-ages'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('v20-dark-ages');
  });

  it('should render navbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('timesink-navbar')).toBeTruthy();
  });
});
