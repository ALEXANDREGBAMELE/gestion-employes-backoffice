import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'employee',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class EmployeeComponent {

  constructor(private router: Router,) { }
  ngOnInit(): void {


  }


}
