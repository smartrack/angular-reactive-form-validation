import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

}
