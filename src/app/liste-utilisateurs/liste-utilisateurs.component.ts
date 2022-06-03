import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserObject, TokenObject } from '../interface/interface';
import { JwtTokenService } from '../jwt-token.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {
  users?: Array<UserObject>;
  token?: TokenObject;

  constructor(public usersService: UsersService , private tokenService : JwtTokenService) {
    this.usersService.getUsers().subscribe((data) => (this.users = data));
    this.token = this.tokenService.decodeToken();
  }
     
  ngOnInit(): void {
  }

  deleteArticle(id:any){
    console.log(id);
    this.usersService.deleteUsers(id);
  }
  
}
