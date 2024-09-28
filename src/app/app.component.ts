import { Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoaderService } from './core/services/loader.service';
@Component({
  selector: 'body',
  template: `
    <app-loader></app-loader>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor(private router: Router, private loaderService: LoaderService) { }
  ngOnInit(): void {
    initFlowbite();
    this.onLoading()
  }

  onLoading() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loaderService.hide();
      }
    });
  }
}
