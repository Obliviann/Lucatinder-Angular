import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Array<Usuario>;

  constructor(private router:Router, private userService: UsuarioService) { 

  }

  ngOnInit() {
      this.userService.verMatches(1504)
      .subscribe(data => {
        this.matches = data;
      });
    }
  }


