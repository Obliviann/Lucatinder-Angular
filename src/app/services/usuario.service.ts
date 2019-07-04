//1.
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';

//2. indicamos que todo va a ser de formato json 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
    //3, creamos el objeto http

    private isUsuarioLoggedIn;
    public usuarioLogged: Usuario;

    constructor(private http:HttpClient) {}

    private userUrl = 'http://localhost:8080/usuarios'; // /user-portal/users?
    //private userUrl = '/api';
  
    public getUsersList(id: number) {
      return this.http.get<Usuario[]>(this.userUrl+ "/list/"+id);   //getAll
    }
  
    public getUser(id: number) {
      return this.http.get(this.userUrl + "/"+ id);
    }

    public updateUser(user: Usuario, id: number) {
      return this.http.put(this.userUrl + "/"+ id, user);
    }

    public deleteUser(id: number) {
      return this.http.delete(this.userUrl + "/"+ id);
    }
  
    public createUser(user) {
      return this.http.post<Usuario>(this.userUrl, user);
    } 

    public like(id1: number, id2: number){
      return this.http.get<Usuario>(this.userUrl + "/like/"+id1+"/"+id2);
    }

    public dislike(id1: number, id2: number){
      return this.http.get<Usuario>(this.userUrl + "/dislike/"+id1+"/"+id2);
    }

    public verMatches(id: number){
      return this.http.get<Usuario[]>(this.userUrl + "/matches/"+id);
    }

    setUsuarioLoggedIn(user: Usuario) {
      this.isUsuarioLoggedIn = true;
      this.usuarioLogged = user;
      localStorage.setItem('usuario', JSON.stringify(user));
    }
   
    getUsuarioLoggedIn() {
        return JSON.parse(localStorage.getItem('usuario'));
    }

  }