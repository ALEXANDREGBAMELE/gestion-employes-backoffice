import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contract',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class ContractComponent {

  constructor(private router: Router,) { }
  ngOnInit(): void {


  }


}
