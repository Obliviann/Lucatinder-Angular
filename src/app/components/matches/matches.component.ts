import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Usuario } from '../../models/usuario';
/*import { UserService } from '../../services/uservice';*/

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private router:Router, private usuarioService: UsuarioService) { 

  }

  ngOnInit() {
  }

}
