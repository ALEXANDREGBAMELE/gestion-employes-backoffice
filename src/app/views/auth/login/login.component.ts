import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  isSubmited: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.isSubmited = true;
    this.router.navigate(['dashboard']);
    this.isSubmited = false;
  }

}
