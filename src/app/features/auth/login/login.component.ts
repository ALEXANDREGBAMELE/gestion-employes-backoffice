import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;
  form!: FormGroup;
  constructor(private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.onInitForm()
  }

  onInitForm() {
    this.form = this.fb.group({
      username: ["", []],
      password: ["", []]
    })
  }

  login() {
    this.isSubmitted = true;
    console.log(this.form.value);
    this.form.disable();

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
      this.isSubmitted = false;
      this.form.enable();
    }, 3000);
  }

  onSubmit() {

  }

}
