import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dinero',
  templateUrl: './dinero.component.html',
  styleUrls: ['./dinero.component.scss']
})
export class DineroComponent {

  constructor(private router: Router) {}
  
  home(){
    this.router.navigate(['/home']);
  }
}
