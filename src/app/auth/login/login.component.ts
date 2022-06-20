import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  login: Login = new Login('fch@gmail.com', 'fc@gmail.com', false);

  formularioLogin : FormGroup

  minCantChrNombre:number = 5
  maxCantChrNombre:number = 15



  constructor(private fb: FormBuilder) {
    this.formularioLogin = fb.group({
      email : ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(this.minCantChrNombre),
                    Validators.maxLength(this.maxCantChrNombre)
      ])],
      password : ['', Validators.compose([
                      Validators.required,
                      Validators.minLength(this.minCantChrNombre),
                      Validators.maxLength(this.maxCantChrNombre)
      ])],
      remember : false
      
    })
  }
   
  ngOnInit(): void {
  }

  submitLogin() {
    console.log(this.formularioLogin.value)
    this.formularioLogin.reset()
  }
}
