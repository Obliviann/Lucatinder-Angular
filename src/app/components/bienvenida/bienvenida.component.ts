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
  user: Usuario = new Usuario();  //esto se llena con this.user = data lin 24
  //3.
  constructor(private router: Router, private usuarioService: UsuarioService) { }

  //: void ?
  // like() {                  //TODO
  //   this.usuarioService.like(1,2)
  //       .subscribe( data => { //me suscribo a los servicios del método like
  //         this.user = data;   //data es la inf que me llega, y se la asigno a users
  //       })
  //};

  // dislike() {
  //   this.usuarioService.dislike(1,2)
  // }

  //se ejecuta automáticamente cuando carge la página
  ngOnInit() {
    // this.usuarioService.getUsersList(this.user.idusuario)
    // .subscribe( data => { //me suscribo a los servicios del método getUser cuando hago una llamada http
    //   this.user = data;   //data es la inf que me llega, y se la asigno a user
    // });
  };

}
