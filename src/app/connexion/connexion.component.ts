import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;
  constructor(formBuilder: FormBuilder) { 
  this.connexionForm = formBuilder.group({
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ])
  })}

  ngOnInit(): void {
  }

  submitForm() {
    alert('C\'est connecté')
  }
  }

  
