import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {
  users!: User[];
  constructor() { }

  ngOnInit(): void {
    this.users = [  { id:'1', email: 'toto@toto.fr', pseudo:'toto'},
                    { id:'2', email: 'lulu@lulu.fr', pseudo:'lulu'},
                    { id:'3', email: 'fifi@fifi.fr', pseudo:'fifi'}]
  }

}
