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

    constructor(private http:HttpClient) {}

    private userUrl = 'http://localhost:8080/users'; // /user-portal/users?
    //private userUrl = '/api';
  
    public getUsers() {
      return this.http.get<Usuario[]>(this.userUrl);   //getAll
    }                   //indicamos que va a devolver un listado de usuarios
  
    //http://localhost:8080/users/5
    public deleteUser(user) {
      return this.http.delete(this.userUrl + "/"+ user.id);
    }
  
    public createUser(user) {
      return this.http.post<Usuario>(this.userUrl, user);
    }  //le damos la misma ruta a todxs, y a través de aquí decidmos si será GET o POST
       //en este caso, tiene un parámetro extra, el del própio Objeto
  }