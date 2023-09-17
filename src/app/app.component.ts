import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToggleThemeService } from './services/toggle-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LinkUp';
  shouldShowSelect: boolean = true;

  constructor(private activatedRoute:ActivatedRoute,
    ){}

  showNav(): boolean {
    const currentRoute = this.activatedRoute.firstChild;
    if (currentRoute) {
      const routePath = currentRoute.routeConfig?.path || '';

      const routesToHideNav = ['auth/login', 'auth/register','auth/reset/password','auth/reset/password/:token','**'];
      return !routesToHideNav.includes(routePath);
    }
    // Default to showing the navigation
    return true;
  }



}
