import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuButton } from '../menu-button';
import { HostListener } from '@angular/core';

@Component({
  selector: 'timesink-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  menuButtons: MenuButton[] = [];

  isMobile = false;
  mobileViewPortSize = 640;

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigateByUrl(`/home`);
  }

  ngOnInit() {
    if (window.screen.width <= this.mobileViewPortSize) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth <= this.mobileViewPortSize) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
