import { Component, OnInit } from '@angular/core';
//1. importamos:
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  //2. instanciamos un objeto Usuario
  userSesion: Usuario;
  userList : Array<Usuario>;//esto se llena con this.user = data lin 24
  //3.
  constructor(private router: Router, private usuarioService: UsuarioService) { }

  //se ejecuta automáticamente cuando carge la página
  ngOnInit() {
    this.userSesion = this.usuarioService.getUsuarioLoggedIn();
    this.usuarioService.getUsersList(this.userSesion.idusuario)
        .subscribe( data => {  //me suscribo a los servicios del método (solo para peticiones http)
         this.userList = data; //data es la inf que me llega, y se la asigno a user
      })
  }
  
  like(user1: Usuario, user2: Usuario) {   

    console.log(user1);

    this.usuarioService.like(user1.idusuario, user2.idusuario)
        .subscribe( data => { //me suscribo a los servicios del método like
          this.userList = this.userList.filter(u => u !== user2);
          this.userSesion = data;   //data es la inf que me llega, y se la asigno a users
        })
  }

  dislike(user1: Usuario, user2: Usuario) {
    this.usuarioService.dislike(user1.idusuario, user2.idusuario)
        .subscribe( data => {
          this.userList = this.userList.filter(u => u !== user2);
          this.userSesion = data;
        })
  }

  
}
