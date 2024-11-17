import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styles: [
  ]
})
export class DefaultLayoutComponent implements OnInit {
  constructor(private layoutService: LayoutService) { }

  isSidebarOpen = true;
  isFullScreen = true;


  ngOnInit() {
    // this.layoutService.isSidebarOpen$.subscribe(open => {
    //   this.isSidebarOpen = open;
    // });

    // this.layoutService.isFullScreen$.subscribe(fullScreen => {
    //   this.isFullScreen = fullScreen;
    // });
  }

}
