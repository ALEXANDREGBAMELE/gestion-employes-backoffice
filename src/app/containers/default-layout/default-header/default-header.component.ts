import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'src/app/core/services/drawer.service';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styles: [
  ]
})
export class DefaultHeaderComponent implements OnInit {
  isSidebarOpen = true;
  isFullScreen = true;

  constructor(private drawerService: DrawerService, private layoutService: LayoutService) { }
  toggleFullScreen() {
    this.layoutService.toggleSidebar(); // Ferme ou ouvre la sidebar
    this.layoutService.setFullScreen(!this.layoutService.isFullScreen.value); // Change l'état plein écran
  }
  toggleSidebar() {
    this.drawerService.toggleDrawer(true); // Passe `true` pour ouvrir le sidebar
  }
  isLeftIconVisible: boolean = true;

  toggleIcon() {
    this.toggleFullScreen()
    this.isLeftIconVisible = !this.isLeftIconVisible;
  }


  ngOnInit(): void {
  }

}
