import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  user: Usuario;
  constructor(private router: Router, private userService: UsuarioService ) { 

  }

  ngOnInit() 
  {
    this.userService.getUser(this.user.idusuario)
      .subscribe( data => {
        this.user = this.user;
      })
    //this.userService.getUser(this.user.idusuario)  
  }
}