import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { JwtTokenService } from '../jwt-token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;
  
  constructor(formBuilder: FormBuilder,private usersService : UsersService,private tokenService: JwtTokenService,private router: Router ) {  
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
    const that = this;
    this.usersService
      .loginUser(this.connexionForm.value.email, this.connexionForm.value.password)
      .subscribe({
        next(data) {
          that.tokenService.setToken(data.token);
        },
      });

    this.usersService.setuserConnected(true);
    this.router.navigate(['tbd']);
  }

  
  }

  
