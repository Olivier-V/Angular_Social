import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  
  constructor(formBuilder: FormBuilder,private usersService : UsersService) { 
  this.inscriptionForm = formBuilder.group({
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    pseudo: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      this.validatorRe(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)
    ]),
    passwordConfirm: new FormControl("", [
      Validators.required,
      this.ConfirmedValidator()
    ]
  )})
  }
  ConfirmedValidator(): ValidatorFn {
     return (control: AbstractControl): ValidationErrors | null => {
      if ( this.inscriptionForm){
      var pass = this.inscriptionForm.get('password').value;
      var passconf = this.inscriptionForm.get('passwordConfirm').value;
      var goodmatche = true;}
      console.log("ici" , pass , passconf)
      if ( pass == passconf ){
        goodmatche = true;
        return goodmatche ? null : { goodmatchePassword: { value: control.value } };
      }else{
        goodmatche = false;
        return goodmatche ? null : { goodmatchePassword: { value: null } };
      }
    
     }

  }
  ngOnInit(): void {
  }
  validatorRe(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? null : { forbiddenName: { value: control.value } };
    };
  }

  submitForm() {
    if (this.inscriptionForm?.valid) {
      const data = this.inscriptionForm.value;
      this.usersService
      .addUser(data.pseudo, data.email, data.password, data.avatar)
      .subscribe((data) => console.log(data));
    }
    else {
      //console.log(this.inscriptionForm.value.email)
      alert('il y a une erreur dans le formulaire')
    }
  }

}
