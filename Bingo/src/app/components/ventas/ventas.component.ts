import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { comida_model } from 'src/app/models/comida_model';
import { ComidaService } from 'src/app/services/comida/comida.service';
import { venta_model } from 'src/app/models/venta_model';



@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit{

  
  myControl = new FormControl<string | comida_model>('');
  comidas: comida_model[] = [];

  filteredOptions: Observable<comida_model[]> | undefined;
  
  total:number = 0;
  cantidad:number = 0;
  precio:number = 0;
  selectedComida: comida_model = {id:0, nombre:"", precio:0, cantidad:0};
  comidas_compradas:comida_model[] = [];
  
  menu = new FormControl('');
  menuList: string[] = [];

  constructor(private router: Router, private comidaService:ComidaService) {}
  


  ngOnInit() {
    this.comidas = [];
    let lista: comida_model[] = [];
  
    this.comidaService.getComida().subscribe((data: comida_model[]) => {
      lista = data;
      for (let comida of lista) {
        this.comidas.push(comida);
        this.menuList.push(comida.nombre);
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

  agregar_a_lista(id:number, nombre:string, precio:number, cantidad:number){
    let comida:comida_model = {id:id , nombre:nombre , precio:precio*cantidad , cantidad:cantidad }
    this.comidas_compradas.push(comida);
    this.total += comida.precio
     
  }

  confirmar_venta(id:number, nombre:string, precio:number, cantidad_existente:number, cantidad_compra:number){
    //this.calcular_total(precio, cantidad_compra)
    let comida_actualizada = {id:id, nombre:nombre, precio:precio, cantidad:cantidad_existente-cantidad_compra}
    this.comidaService.editComida(comida_actualizada).subscribe(results => {
      window.location.reload();
      }
    );

    for (let comida of this.comidas_compradas) {
      let venta:venta_model = {producto: comida.nombre, cantidad:comida.cantidad , total:comida.precio }
      this.comidaService.addVenta_Comida(venta).subscribe(results => {
      //window.location.reload();
    })
    }

    
  }
   
}

