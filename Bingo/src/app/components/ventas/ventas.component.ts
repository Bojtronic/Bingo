import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { comida_model } from 'src/app/models/comida_model';





@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit{

  myControl = new FormControl<string | comida_model>('');
  options: comida_model[] = [
    {nombre: 'Cajeta', precio: 500, cantidad: 30}, 
    {nombre: 'Arroz con leche', precio: 500, cantidad: 50}, 
    {nombre: 'Cafe', precio: 300, cantidad: 50}];

  filteredOptions: Observable<comida_model[]> | undefined;
  
  constructor(private router: Router) {}
  
  home(){
    this.router.navigate(['/home']);
  }

  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const nombre = typeof value === 'string' ? value : value?.nombre;
        return nombre ? this._filter(nombre as string) : this.options.slice();
      }),
    );
  }

  displayFn(comida: comida_model): string {
    if (comida && comida.nombre) {
      // Mostrar el nombre, precio y cantidad en el formato deseado
      return `${comida.nombre} >>> ${comida.precio} colones  ---  Disponible: ${comida.cantidad}`;
    }
    return '';
  }

  private _filter(name: string): comida_model[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }
  
}
