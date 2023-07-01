import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { carton_model } from 'src/app/models/carton_model';
import { comida_model } from 'src/app/models/comida_model';
import { ComidaService } from 'src/app/services/comida/comida.service';
import { CompraCartonService } from 'src/app/services/compra_carton/compra-carton.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent {

  constructor(private router: Router, private compra_cartonService:CompraCartonService, private comidaService:ComidaService) {}
  
  home(){
    this.router.navigate(['/home']);
  }

  actualizar_cartones(cantidad:number, precio:number){
    let carton_update:carton_model = {id:1, cantidad_disponible: cantidad, precio_unitario:precio}
    this.compra_cartonService.editCartones_disponibles(carton_update).subscribe(results => {
      console.log("se actualizó la cantidad de cartones")
      window.location.reload();
    });
    window.location.reload();
  }

  agregar_comida(nombre:string, precio:number, cantidad:number){
    let comida:comida_model = {id:0, nombre:nombre, cantidad:cantidad, precio:precio}

    console.log(comida)

    this.comidaService.addComida(comida).subscribe(results => {
      window.location.reload();
    });
    //window.location.reload();
  }
}
