import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Register } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: Register = new Register('fcruz', 'fc@gmail.com', 'xxxxx', false);

  formularioRegister : FormGroup

  minCantChrNombre:number = 5
  maxCantChrNombre:number = 15


  constructor(private fb: FormBuilder) { 
    this.formularioRegister = fb.group({
      name : ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minCantChrNombre),
        Validators.maxLength(this.maxCantChrNombre)
      ])],
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
      agree : false
      
    })
  }

  ngOnInit(): void {

  }

  submitRegister() {
    console.log(this.formularioRegister.value)
    this.formularioRegister.reset()
  }

}
