import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Form } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: Form = new Form('fcruz', 'fc@gmail.com', '123456', 'xxxxx', '', '', '');

  formularioForm : FormGroup

  minCantChrNombre:number = 5
  maxCantChrNombre:number = 15
  maxCantChrMensaje:number = 150

  constructor(private fb: FormBuilder) { 
    this.formularioForm = fb.group({
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
      telefono : [, Validators.compose([
        Validators.required,
        Validators.minLength(this.minCantChrNombre),
        Validators.maxLength(this.maxCantChrNombre)
      ])],
      curso : ['Seleccione un Curso', Validators.compose([
                      Validators.required,
      ])],
      modalidad : ['Seleccione un Modalidad', Validators.compose([
        Validators.required,
      ])],
      horario : ['Seleccione un Horario', Validators.compose([
        Validators.required,
      ])],
      mensaje : ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minCantChrNombre),
        Validators.maxLength(this.maxCantChrMensaje)
])],
      
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.formularioForm.value)
    this.formularioForm.reset()
  }

}
