import { Component, OnInit } from '@angular/core';
import { navData } from '../../nav';
@Component({
  selector: 'app-default-side-bar',
  templateUrl: './default-side-bar.component.html',
  styles: [
  ]
})
export class DefaultSideBarComponent implements OnInit {
  public navItems = navData || null;
  constructor() { }

  ngOnInit(): void {

  }

  // Function to toggle dropdown
  toggleDropdown(item: any): void {
    item.isOpen = !item.isOpen;
  }

}
