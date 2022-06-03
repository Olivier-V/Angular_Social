import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtTokenService } from './jwt-token.service';
import { ArticleObject, TokenObject, UserObject } from './interface';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  token: TokenObject;
  
  urlBase = 'https://reseau.jdedev.fr/api/article';
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + this.tokenService.getToken()
    }),
  };

  constructor(private http: HttpClient,private tokenService: JwtTokenService) {
    this.token = this.tokenService.decodeToken();
    
   }

  getArticles(){
    const token = this.tokenService.getToken();
    let retour = this.http
    .get<Array<ArticleObject>>(this.urlBase, {
      headers: {
        Authorization: 'Bearer' + ' ' + token,
      },
    })
    .pipe(tap((allArticle: Array<ArticleObject>) => allArticle ));
    return retour;    
  }

  get1Article(id:string){
    const token = this.tokenService.getToken();
    
    let retour = this.http
    .get<ArticleObject>(this.urlBase+'/'+id, {
      headers: {
        Authorization: 'Bearer' + ' ' + token,
      },
    })
    .pipe(tap((article: ArticleObject) => article ));
    return retour;  
  }
  
  postArticle(contenu: string, titre: string): Observable<ArticleObject> {
    return this.http
      .post<ArticleObject>(this.urlBase, { titre, contenu }, this.httpOptions)
      .pipe(tap((article: ArticleObject) => article));
      
  }

  updateArticle(
    id: number,
    contenu: string,
    titre: string
  ): Observable<ArticleObject> {
    return this.http
      .put<ArticleObject>(this.urlBase+'/'+id,{ titre, contenu },this.httpOptions)
      .pipe(tap((article: ArticleObject) => article));
  }

  deleteArticle(id: number){
      return this.http.delete(this.urlBase+'/'+id,this.httpOptions)
      .subscribe(() => console.log('Delete successful') );
    }
  
}
