import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { V20DaHomeComponent } from '@timesink/feature-v20-home';
import { UiModule } from '@timesink/ui';
import { AppComponent } from './app.component';

export class MockAuthService {
  public handleAuth(): void {
    return;
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
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('timesink-navbar')).toBeTruthy();
  });
});
