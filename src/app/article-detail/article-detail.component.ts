import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../articles.service";
import {ActivatedRoute} from '@angular/router';
import { ArticleObject, TokenObject } from '../interface';
import { JwtTokenService } from '../jwt-token.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  token: TokenObject;
  article: ArticleObject;
  private sub: any;
  id: string;
  toUpdate: ArticleObject;
 
  constructor( private articlesService: ArticlesService,private route: ActivatedRoute, private tokenservice:JwtTokenService) {
    this.token = this.tokenservice.decodeToken();
  }

  ngOnInit(): void {
    const that = this;
    if (this.token) {
      this.sub = this.route.params.subscribe(params => {
        this.id = String(+params['id']);
        this.articlesService.get1Article(this.id)
          .subscribe((data: any) => {
              that.article = data;
            }
          );
      });
    }
  }

  submitForm() {
    // let monid = Number(this.id); 
    // this.toUpdate.contenu = document.getElementById('contenu').innerText;
    // this.toUpdate.titre = document.getElementById('titre').innerText;
    const that = this;
    console.log('ici' , document.getElementById('contenu').innerText, document.getElementById('titre').innerText);
    //  this.articlesService
    //      .updateArticle(monid,this.toUpdate.contenu, this.toUpdate.titre)
    //      .subscribe((data) => console.log(data));
       };
  
}
