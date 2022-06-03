import { Component, OnInit } from '@angular/core';
import { ArticleObject, TokenObject, UserObject } from '../interface';
import { ArticlesService } from '../articles.service';
import { GetNamebyIdService } from '../get-nameby-id.service';
import { UsersService } from '../users.service';
import { JwtTokenService } from '../jwt-token.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
  articles?: Array<ArticleObject>;
  token?: TokenObject;
  id:string;
  article: ArticleObject;

  constructor(private route: ActivatedRoute,public articlesService: ArticlesService,public usersService : UsersService, public tokenService : JwtTokenService,public GetNamebyIdService : GetNamebyIdService,private router: Router) {
    this.articlesService.getArticles().subscribe((data) => (this.articles = data));
    this.token = this.tokenService.decodeToken();
   }

  ngOnInit(): void {
    
  }
  deleteArticle(id:any){
    console.log(id);
    this.articlesService.deleteArticle(id);
    
    
  }

}
