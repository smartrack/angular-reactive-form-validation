import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppFormGroup } from '../../shared/directives/form-group.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .field-error{
      color:#9F3A38;
    }
    `
  ]
})
export class LoginComponent implements OnInit {

  loginForm: AppFormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = new AppFormGroup({
      username: new FormControl('', Validators.required)
    });
  }

  handleFormSubmit() {
    console.log(this.loginForm);
    console.log('Form Submitted', this.loginForm.value);
  }
}
