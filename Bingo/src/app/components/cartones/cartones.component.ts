import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartones',
  templateUrl: './cartones.component.html',
  styleUrls: ['./cartones.component.scss']
})
export class CartonesComponent {

  total:number = 0;
  cantidad:number = 0;
  precio:number = 0;
  
  constructor(private router: Router) {}
  
  home(){
    this.router.navigate(['/home']);
  }

  calcular_total(cantidad_cartones:number, cantidad_promos_1:number, cantidad_promos_2:number, cantidad_promos_3:number){
    this.total = (cantidad_cartones * 1000) + (cantidad_promos_1 * 5000) + (cantidad_promos_2 * 8000) + (cantidad_promos_3 * 10000);    
  }

  /*
  confirmar_venta(id:number, nombre:string, precio:number, cantidad_existente:number, cantidad_compra:number){
    this.calcular_total(precio, cantidad_compra)
    let comida_actualizada = {id:id, nombre:nombre, precio:precio, cantidad:cantidad_existente-cantidad_compra}
    this.cartonService.editCarton(comida_actualizada).subscribe(results => {
      window.location.reload();
      }
    );
    window.location.reload();
    }
    */
}
