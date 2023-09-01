import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  sideMenuOpen: boolean = false;

  toggleMenu =()=>{
    this.sideMenuOpen = !this.sideMenuOpen;

  }
  closeSideMenu() {
    this.sideMenuOpen = false;
  }



}
