import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carton_model } from 'src/app/models/carton_model';
import { compra_carton_model } from 'src/app/models/compra_carton_model';

@Injectable({
  providedIn: 'root'
})
export class CompraCartonService {

  URL_compra_cartones: string = "http://localhost:4000/api/compra_cartones/";
  URL_cartones_disponibles: string = "http://localhost:4000/api/cartones/1"; 
  
  constructor(private http: HttpClient) { }

  getCartones_disponibles(): Observable<carton_model[]> {
    return this.http.get<carton_model[]>(this.URL_cartones_disponibles);
  }

  editCartones_disponibles(cartones_disponibles: carton_model): Observable<carton_model>{
    return this.http.put<carton_model>(this.URL_compra_cartones, cartones_disponibles);
  }

  getCompra_carton(): Observable<compra_carton_model[]> {
    return this.http.get<compra_carton_model[]>(this.URL_compra_cartones);
  }

  addCompra_carton(compra_carton: compra_carton_model): Observable<string> {
    return this.http.post<string>(this.URL_compra_cartones, compra_carton);
  }

  editCompra_carton(compra_carton: compra_carton_model): Observable<compra_carton_model>{
    return this.http.put<compra_carton_model>(this.URL_compra_cartones+compra_carton.id, {id:compra_carton.id, individuales:compra_carton.individuales, promo_1:compra_carton.promo_1, promo_2:compra_carton.promo_2, total_cartones:compra_carton.total_cartones, total_a_cobrar:compra_carton.total_a_cobrar});
  }

  deleteCompra_carton(id: number): Observable<compra_carton_model> {
    return this.http.delete<compra_carton_model>(this.URL_compra_cartones + id);
  }
}
