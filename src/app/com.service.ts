import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtTokenService } from './jwt-token.service';
import { ComObject, TokenObject } from './interface/interface';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComService {
  token: TokenObject;
  
  urlBase = 'https://reseau.jdedev.fr/api/article';
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + this.tokenService.getToken()
    }),

  }
  constructor(private http: HttpClient,private tokenService: JwtTokenService) {
    this.token = this.tokenService.decodeToken();
   }

   getComByIdArticle(id:number){
    const token = this.tokenService.getToken();
    
    return this.http
    .get(this.urlBase+'/'+id+"/comment", {
      headers: {
        Authorization: 'Bearer' + ' ' + token,
      },
    });
  }
}
