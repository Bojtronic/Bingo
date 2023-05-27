import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario_model } from 'src/app/models/usuario_model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  URL_usuarios: string = "http://localhost:3000/api/usuarios/"; 
  
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<usuario_model[]> {
    return this.http.get<usuario_model[]>(this.URL_usuarios);
  }

  addUsuarios(usuario: usuario_model): Observable<string> {
    return this.http.post<string>(this.URL_usuarios, usuario);
  }
}
