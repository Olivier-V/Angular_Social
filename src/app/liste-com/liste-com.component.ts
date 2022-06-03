import { Component, Input, OnInit } from '@angular/core';
import { ComService } from '../com.service';
import { ArticleObject, ComObject, TokenObject } from '../interface/interface';
import { JwtTokenService } from '../jwt-token.service';

@Component({
  selector: 'app-liste-com',
  templateUrl: './liste-com.component.html',
  styleUrls: ['./liste-com.component.css']
})
export class ListeComComponent implements OnInit {
  @Input() article: ArticleObject
  coms?: Array<ComObject>;
  token?: TokenObject;
  id:string;
  articles:Array<ArticleObject>;

  constructor(private comservice:ComService,private tokenService : JwtTokenService) {
    this.token = this.tokenService.decodeToken();    
  }

  ngOnInit(): void {
  }

  getCom(id:number){
    return (this.comservice.getComByIdArticle(id).subscribe( (data) => this.coms = (data as Array<ComObject>)));
  }

}
