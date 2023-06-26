import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { comida_model } from 'src/app/models/comida_model';
import { ComidaService } from 'src/app/services/comida/comida.service';





@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit{

  myControl = new FormControl<string | comida_model>('');
  comidas: comida_model[] = [];

  /*
  comidas: comida_model[] = [
    {nombre: 'Cajeta', precio: 500, cantidad: 30}, 
    {nombre: 'Arroz con leche', precio: 500, cantidad: 50}, 
    {nombre: 'Cafe', precio: 300, cantidad: 50}];
  */

  filteredOptions: Observable<comida_model[]> | undefined;
  
  total:number = 0;
  cantidad:number = 0;
  precio:number = 0;
  selectedComida: comida_model = {nombre:"", precio:0, cantidad:0};
  
  constructor(private router: Router, private comidaService:ComidaService) {}
  


  ngOnInit() {
    this.comidas = [];
    let lista: comida_model[] = [];
  
    this.comidaService.getComida().subscribe((data: comida_model[]) => {
      lista = data;
      for (let comida of lista) {
        this.comidas.push(comida);
      }
      
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const nombre = typeof value === 'string' ? value : value?.nombre;
          return nombre ? this._filter(nombre as string) : this.comidas.slice();
        }),
      );
    });
  }
  

  displayFn(comida: comida_model): string {
    if (comida && comida.nombre) {
      // Mostrar el nombre, precio y cantidad en el formato deseado
      return `${comida.nombre} >>>  Disponible: ${comida.cantidad} --- ${comida.precio} colones `;
    }
    return '';
  }

  private _filter(name: string): comida_model[] {
    const filterValue = name.toLowerCase();

    return this.comidas.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  home(){
    this.router.navigate(['/home']);
  }

  calcular_total(precio:number, cantidad:number){
    this.total = precio * cantidad;
    console.log(precio)
    
  }

  
}
