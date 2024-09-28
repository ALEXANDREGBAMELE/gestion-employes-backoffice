import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { navData } from '../../nav';
@Component({
  selector: 'app-default-side-bar',
  templateUrl: './default-side-bar.component.html',
  styles: [
  ]
})
export class DefaultSideBarComponent implements OnInit {
  public navItems = navData || null;
  isDarkMode = false;
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    //  Vérifie si le mode sombre est activé au chargement de la page
    this.isDarkMode = this.themeService.isDarkModeEnabled();
  }

  // Function to toggle dropdown
  toggleDropdown(item: any): void {
    item.isOpen = !item.isOpen;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
  }

}
