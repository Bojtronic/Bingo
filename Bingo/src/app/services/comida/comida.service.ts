import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comida_model } from 'src/app/models/comida_model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  URL_comidas: string = "http://localhost:4000/api/comidas/"; 
  
  constructor(private http: HttpClient) { }

  getComida(): Observable<comida_model[]> {
    return this.http.get<comida_model[]>(this.URL_comidas);
  }

  addComida(usuario: comida_model): Observable<string> {
    return this.http.post<string>(this.URL_comidas, usuario);
  }

  editComida(comida: comida_model): Observable<comida_model>{
    return this.http.put<comida_model>(this.URL_comidas+comida.id, {nombre:comida.nombre, cantidad:comida.cantidad, precio:comida.precio});
  }

  deleteComida(id: number): Observable<comida_model> {
    return this.http.delete<comida_model>(this.URL_comidas + id);
  }
}
