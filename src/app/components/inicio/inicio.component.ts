import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [UsuarioService]
})
export class InicioComponent implements OnInit {

  user: Usuario = new Usuario();

  constructor(private userService: UsuarioService) { }

  ngOnInit() {
  }

  public login(id: number){
    console.log(id)

    this.userService.getUser(id).subscribe((user: any) => {
      if (user) {
        this.user = user;
        this.userService.setUsuarioLoggedIn(user);
        console.log(user);
      } else {
        console.log(`Usuario no encontrado`);
        //this.gotoList();
      }
    });

  }

  register(){
    console.log(this.user);
  }
}
