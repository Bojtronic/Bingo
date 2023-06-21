import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartones',
  templateUrl: './cartones.component.html',
  styleUrls: ['./cartones.component.scss']
})
export class CartonesComponent {

  total:number = 0;

  constructor(private router: Router) {}
  
  home(){
    this.router.navigate(['/home']);
  }
}
