import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService, IdToken, User } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { ProfilePageComponent } from './profile-page.component';

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

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatFormFieldModule, MatInputModule],
      providers: [{ provide: AuthService, useValue: new MockAuthService() }],
      declarations: [ProfilePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
