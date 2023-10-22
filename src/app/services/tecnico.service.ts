import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  private readonly API = 'api/tecnicos';

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Tecnico> {
    return this.http.get<Tecnico>(`${this.API}/${id}`);
  }

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(this.API);
  }

  create(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(this.API, tecnico);
  }

  update(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.put<Tecnico>(`${this.API}/${tecnico.id}`, tecnico);
  }

  delete(id: any): Observable<Tecnico> {
    return this.http.delete<Tecnico>(`${this.API}/${id}`);
  }
}
