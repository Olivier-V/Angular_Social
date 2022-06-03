import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtTokenService } from './jwt-token.service';
import { UserObject, TokenObject } from './interface';

@Injectable({
  providedIn: 'root'
})
export class GetNamebyIdService {
  userIsConnected: boolean = false;

  urlBase = 'https://reseau.jdedev.fr/api/user';
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient,private tokenService: JwtTokenService) {
    if (this.tokenService.getToken()) {
      this.setuserConnected(true);
    }
  }
  getuserConnected(): boolean {
    return this.userIsConnected;
  }

  setuserConnected(bool: boolean) {
    if (bool) {
      this.userIsConnected = !this.userIsConnected;
    }
  }

  getUserById(id:string): Observable<UserObject>{
    const token = this.tokenService.getToken();

    return this.http
      .get<UserObject>(this.urlBase + '/:' + id, {
        headers: {
          Authorization: 'Bearer' + ' ' + token,
        },
      })
      .pipe(tap(( user: UserObject) => user));
  }


}
