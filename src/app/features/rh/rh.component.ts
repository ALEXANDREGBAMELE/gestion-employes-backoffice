import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rh',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class RhComponent {

  constructor(private router: Router,) { }
  ngOnInit(): void {


  }


}
