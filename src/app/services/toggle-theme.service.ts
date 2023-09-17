import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleThemeService {




  toggleTheme(): string {
    let mode = localStorage.getItem('theme') || '';
    const isDarkMode = mode === 'dark-mode' || document.body.classList.contains('dark-mode');

    if (isDarkMode) {
      localStorage.setItem('theme', 'light-mode');
      document.body.classList.remove('dark-mode');
      document.getElementById('nav')?.classList.remove('dark-nav');
      document.getElementById('side-menu')?.classList.remove('color');
      document.getElementById('special-text')?.classList.remove('text-color');
       return 'light'
    } else {
      localStorage.setItem('theme', 'dark-mode');
      document.body.classList.add('dark-mode');
      document.getElementById('nav')?.classList.add('dark-nav');
      document.getElementById('side-menu')?.classList.add('color');
      document.getElementById('special-text')?.classList.add('text-color');

      return 'dark'
    }

  }

  setTheme(): string {
    let mode = localStorage.getItem('theme') || '';

    if (mode == 'dark-mode') {
      localStorage.setItem('theme', 'dark-mode');
      document.body.classList.add('dark-mode');
      document.getElementById('nav')?.classList.add('dark-nav');
      document.getElementById('side-menu')?.classList.add('color');
      document.getElementById('special-text')?.classList.add('text-color');

      return 'dark';

    } else {
      localStorage.setItem('theme', 'light-mode');
      document.body.classList.remove('dark-mode');
      document.getElementById('nav')?.classList.remove('dark-nav');
      document.getElementById('side-menu')?.classList.remove('color');
      document.getElementById('special-text')?.classList.remove('text-color');
      return 'light'
    }

  }

  // setLight =()=>{
  //   localStorage.setItem('theme', 'light-mode');
  //   document.body.classList.remove('dark-mode');
  //   document.getElementById('nav')?.classList.remove('dark-nav');
  //   document.getElementById('side-menu')?.classList.remove('color');
  //   document.getElementById('special-text')?.classList.remove('text-color');
  // }




  constructor() { }
}
