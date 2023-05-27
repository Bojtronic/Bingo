import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario_model } from 'src/app/models/usuario_model';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  usuarios: usuario_model[] = [];

  constructor(private router: Router, public testService:TestService) {}

  ventas(){
    this.router.navigate(['/ventas']);
  }

  dinero(){
    this.router.navigate(['/dinero']);
  }
  
  test(){
    this.usuarios = [];
    this.testService.getUsuarios().subscribe ((data: usuario_model[]) => {
      this.usuarios = data;
      for (let usuario of this.usuarios) {
        console.log(usuario) 
      }      
    });
  }
}
