export interface UserObject {
    avatar: string;
    email: string;
    id: number;
    niveau: number;
    password: string;
    pseudo: string;
  }

  export interface TokenObject {
    id: number;
    email: string;
    password: string;
    niveau: number;
    token: string;
    exp: number;
    iat: number;
  }
  export interface ArticleObject {
    titre: string;
    id: number;
    contenu: string;
    id_article: number;
    creation: string;
    pseudo : string;
  }
  export interface ComObject{
    id_commentaire: number;
    contenu: string;
    id_article: number;
    id: number;
  }