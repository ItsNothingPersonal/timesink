import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button.component';

export class MockAuthService {
  public handleAuth(): void {
    return;
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
