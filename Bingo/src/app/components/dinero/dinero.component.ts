import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { venta_model } from 'src/app/models/venta_model';
import { ComidaService } from 'src/app/services/comida/comida.service';


@Component({
  selector: 'app-dinero',
  templateUrl: './dinero.component.html',
  styleUrls: ['./dinero.component.scss']
})
export class DineroComponent {

  ventas:venta_model[] = []
  displayedColumns: string[] = ['id', 'producto', 'cantidad', 'total'];
  dataSource = this.ventas;
  total:number = 0;

  constructor(private router: Router, private comidaService:ComidaService) {}
  
  ngOnInit() {
    this.ventas = [];
    let lista: venta_model[] = [];
  
    this.comidaService.getVenta_Comida().subscribe((data: venta_model[]) => {
      lista = data;
      for (let venta of lista) {
        this.ventas.push(venta);
        this.total += venta.total;
      }
      this.dataSource = this.ventas;     
    });
  }

  home(){
    this.router.navigate(['/home']);
  }
}
