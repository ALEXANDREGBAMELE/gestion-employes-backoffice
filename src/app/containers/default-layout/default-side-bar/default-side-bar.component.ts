import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerService } from 'src/app/core/services/drawer.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { INavData, navData } from '../../nav';
@Component({
  selector: 'app-default-side-bar',
  templateUrl: './default-side-bar.component.html',
  styles: [
  ]
})
export class DefaultSideBarComponent implements OnInit {
  public navItems = navData || null;
  isOpen = false;
  isDarkMode = false;
  isSidebarOpen: boolean = false;

  // Output pour émettre la valeur vers le parent
  @Output() fullScreemChange: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router, private themeService: ThemeService, private drawerService: DrawerService) { }

  ngOnInit(): void {
    //  Vérifie si le mode sombre est activé au chargement de la page
    this.isDarkMode = this.themeService.isDarkModeEnabled();

    this.drawerService.drawerState$.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
    });



    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.drawerService.toggleDrawer(false); // Fermer le drawer après navigation
    //   });

    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationStart) {
    //     this.isOpen = false; // Ferme le drawer
    //   }
    // });


  }

  closeDrawerOnNavigate(itemUrl: string | undefined) {
    if (itemUrl) {
      this.isOpen = false; // Ferme uniquement si un lien est cliqué
    }
  }

  // Fermer le drawer en cliquant sur l'overlay
  closeDrawer() {
    this.isOpen = false;
  }


  // Function to toggle dropdown
  toggleDropdown(item: any): void {
    item.isOpen = !item.isOpen;
  }


  handleItemClick(item: any, list: INavData[]): void {
    if (item.children?.length) {
      // Si c'est un élément avec enfants → fermer tous ses frères au même niveau
      list.forEach((i) => {
        if (i !== item) {
          i.isOpen = false;
        }
      });
      // Toggle celui-ci
      item.isOpen = !item.isOpen;
    } else {
      // Si c'est un lien sans enfant → comportement normal
      this.closeDrawerOnNavigate(item.url);
    }
  }


  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
  }

}
