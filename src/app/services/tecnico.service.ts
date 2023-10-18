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

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(this.API);
  }

  create(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(this.API, tecnico);
  }
}
