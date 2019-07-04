import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [UsuarioService]
})
export class InicioComponent implements OnInit {

  user: Usuario = new Usuario();

  constructor(private userService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
  }

  public login(id: number){
    console.log(id)

    this.userService.getUser(id).subscribe((user: any) => {
      if (user) {
        this.user = user;
        this.userService.setUsuarioLoggedIn(user);
        console.log(user);
        this.gotoList();
      } else {
        console.log(`Usuario no encontrado`);
        //this.gotoList();
      }
    });

  }

  register(nombre: string, edad: Date, genero: string){
    this.user.nombre = nombre;
    this.user.edad = edad;
    this.user.genero = genero;

    this.userService.createUser(this.user).subscribe((user: any) => {
      if (user) {
        this.user = user;
        this.userService.setUsuarioLoggedIn(user);
        console.log(user);
        this.gotoList();
      } else {
        console.log(`Usuario no registrado`);
        //this.gotoList();
      }
    });

    console.log(this.user);
  }

  gotoList() {
    this.router.navigate(['/bienvenue']);
  }

}
