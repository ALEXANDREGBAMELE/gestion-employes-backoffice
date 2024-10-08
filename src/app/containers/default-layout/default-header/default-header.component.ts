import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'src/app/core/services/drawer.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styles: [
  ]
})
export class DefaultHeaderComponent implements OnInit {
  constructor(private drawerService: DrawerService) { }

  toggleSidebar() {
    this.drawerService.toggleDrawer(true); // Passe `true` pour ouvrir le sidebar
  }

  ngOnInit(): void {
  }

}
