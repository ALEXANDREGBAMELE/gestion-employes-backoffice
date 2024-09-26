import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

  ngOnInit(): void {
    initFlowbite();
  }
}
