import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comida_model } from 'src/app/models/comida_model';
import { venta_model } from 'src/app/models/venta_model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  URL_comidas: string = "http://localhost:4000/api/comidas/";
  URL_ventas: string = "http://localhost:4000/api/ventas/"; 
  
  constructor(private http: HttpClient) { }

  getComida(): Observable<comida_model[]> {
    return this.http.get<comida_model[]>(this.URL_comidas);
  }

  addComida(comida: comida_model): Observable<string> {
    return this.http.post<string>(this.URL_comidas, comida);
  }

  editComida(comida: comida_model): Observable<comida_model>{
    return this.http.put<comida_model>(this.URL_comidas+comida.id, {nombre:comida.nombre, cantidad:comida.cantidad, precio:comida.precio});
  }

  deleteComida(id: number): Observable<comida_model> {
    return this.http.delete<comida_model>(this.URL_comidas + id);
  }

  getVenta_Comida(): Observable<venta_model[]> {
    return this.http.get<venta_model[]>(this.URL_ventas);
  }

  addVenta_Comida(venta: venta_model): Observable<string> {
    return this.http.post<string>(this.URL_ventas, venta);
  }
}
