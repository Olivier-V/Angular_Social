import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ArticleObject } from '../interface';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {
  articleForm: FormGroup;
  article: ArticleObject;

  constructor(private formBuilder: FormBuilder,private articlesService: ArticlesService) {
    this.articleForm = formBuilder.group({
      titre: new FormControl("" ,[
        Validators.required
      ]),
      contenu: new FormControl("",[
        Validators.required
      ]),
  })
  }
  ngOnInit(): void {
   
  }

  submitForm() {
    const that = this;
    console.log('ici' , this.articleForm.value.contenu, this.articleForm.value.titre)
     this.articlesService
         .postArticle(this.articleForm.value.contenu, this.articleForm.value.titre)
         .subscribe((data) => console.log(data));
      };
    
}
