import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comida_model } from 'src/app/models/comida_model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  URL_usuarios: string = "http://localhost:3000/api/comida/"; 
  
  constructor(private http: HttpClient) { }

  getComida(): Observable<comida_model[]> {
    return this.http.get<comida_model[]>(this.URL_usuarios);
  }

  addComida(usuario: comida_model): Observable<string> {
    return this.http.post<string>(this.URL_usuarios, usuario);
  }
}
