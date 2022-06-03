import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenObject, UserObject } from '../interface';
import { JwtTokenService } from '../jwt-token.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  token: TokenObject;
  user: UserObject;
  private sub: any;
  id: string;
  
  constructor( private usersService : UsersService,private route: ActivatedRoute, private tokenservice:JwtTokenService) { 
    this.token = this.tokenservice.decodeToken();
  }

  ngOnInit(): void {
    const that = this;
    if (this.token) {
      this.sub = this.route.params.subscribe(params => {
        this.id = String(+params['id']);
        this.usersService.get1User(this.id)
          .subscribe((data: any) => {
              that.user = data;
            }
          );
      });
    }
  }

}
