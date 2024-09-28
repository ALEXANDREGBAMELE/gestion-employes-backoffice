import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkThemeClass = 'dark';

  constructor() { }

  enableDarkTheme() {
    document.body.classList.add(this.darkThemeClass);
  }

  enableLightTheme() {
    document.body.classList.remove(this.darkThemeClass);
  }

  toggleTheme(isDarkMode: boolean) {
    isDarkMode ? this.enableDarkTheme() : this.enableLightTheme();
  }

  isDarkModeEnabled(): boolean {
    return document.body.classList.contains(this.darkThemeClass);
  }
}
