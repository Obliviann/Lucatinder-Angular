//1.
import { TestBed } from '@angular/core/testing';
import { UsuarioService } from './user.service';

describe('UserService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
  
    it('should be created', () => {
      const service: UsuarioService = TestBed.get(UsuarioService);
      expect(service).toBeTruthy();
    });
  });