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
    //
    private isUsuarioLoggedIn;
    public usuarioLogged: Usuario;

    //un parámetro en el constructor se considera ya declarado, no hace falta hacerlo
    //(meterlo como parámetro te permite utilizar sus métodos sin tener que instanciarlo)
    //3. creamos el objeto http, gestiona las peticiones
    constructor(private http:HttpClient) {}

    //4. url base del servicio REST
    private userUrl = 'http://localhost:8080/usuarios';
  
    //5. añadimos todos los métodos que vayamos a utilizar
    public getUsersList(id: number) {
      return this.http.get<Usuario[]>(this.userUrl+ "/list/"+id);   //getAll
    } //llamamos al http, 
      //le indicamos el tipo de peticion (get), si va a recibir algún dato,
      //e (indicamos a dónde hacemos esa petición)
  
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
      //guarda user (en json) en la memoria local
    }
   
    getUsuarioLoggedIn() {//parseamos de json->usuario
      this.usuarioLogged = JSON.parse(localStorage.getItem('usuario'));
      return this.usuarioLogged;
    }

  }