import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { carton_model } from 'src/app/models/carton_model';
import { compra_carton_model } from 'src/app/models/compra_carton_model';
import { CompraCartonService } from 'src/app/services/compra_carton/compra-carton.service';

@Component({
  selector: 'app-cartones',
  templateUrl: './cartones.component.html',
  styleUrls: ['./cartones.component.scss']
})
export class CartonesComponent {

  total:number = 0;
  cantidad:number = 0;
  precio:number = 0;
  cartones_disponibles:number = 0;
  
  constructor(private router: Router, private compra_cartonService:CompraCartonService) {}
  
  ngOnInit() {
    this.compra_cartonService.getCartones_disponibles().subscribe((data: carton_model[]) => {
      this.cartones_disponibles = data[0].cantidad_disponible;
      console.log(data)
    })
  }


  home(){
    this.router.navigate(['/home']);
  }

  calcular_total(cantidad_cartones:number, cantidad_promos_1:number, cantidad_promos_2:number){
    this.total = (cantidad_cartones * 1000) + (cantidad_promos_1 * 5000) + (cantidad_promos_2 * 10000);    
  }

  


  confirmar_venta(cantidad_individuales:number, cantidad_promos_1:number, cantidad_promos_2:number){
    this.calcular_total(cantidad_individuales, cantidad_promos_1, cantidad_promos_2)

    let total_cartones:number = cantidad_individuales + (cantidad_promos_1*6) + (cantidad_promos_2*12)
    let total_a_cobrar:number = this.total

    let carton_update:carton_model = {id:1, cantidad_disponible: this.cartones_disponibles-total_cartones ,precio_unitario:1000}
    this.compra_cartonService.editCartones_disponibles(carton_update).subscribe(results => {
      console.log("se actualizó la cantidad de cartones")
    })
    let compra_carton:compra_carton_model = {individuales:cantidad_individuales, promo_1:cantidad_promos_1, promo_2:cantidad_promos_2, total_cartones:total_cartones, total_a_cobrar:total_a_cobrar}
    this.compra_cartonService.addCompra_carton(compra_carton).subscribe(results => {
      window.location.reload();
      }
    );
    //window.location.reload();
    }
    
}
