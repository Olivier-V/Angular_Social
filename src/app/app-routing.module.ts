import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { TdbComponent }  from './tdb/tdb.component';
import { EditionComponent } from './edition/edition.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'users', component: ListeUtilisateursComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'articles', component: ListeArticlesComponent },
  { path: 'article_detail/:id', component: ArticleDetailComponent },
  { path: 'tbd', component: TdbComponent },
  { path: 'edition', component: EditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
