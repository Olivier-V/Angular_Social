import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserObject, TokenObject } from '../interface';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {
  users?: Array<UserObject>;

  constructor(public userService: UsersService) {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }
     
  ngOnInit(): void {
  }
  
}
