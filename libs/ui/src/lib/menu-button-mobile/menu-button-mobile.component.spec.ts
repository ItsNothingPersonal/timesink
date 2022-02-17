import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtonMobileComponent } from './menu-button-mobile.component';

describe('MenuButtonMobileComponent', () => {
  let component: MenuButtonMobileComponent;
  let fixture: ComponentFixture<MenuButtonMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuButtonMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuButtonMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
