import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { DineroComponent } from './components/dinero/dinero.component';
import { CartonesComponent } from './components/cartones/cartones.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'dinero', component: DineroComponent },
  { path: 'cartones', component: CartonesComponent },
  { path: 'agregar', component: AgregarProductosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
