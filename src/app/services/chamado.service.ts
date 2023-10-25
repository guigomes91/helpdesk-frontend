import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chamado } from '../models/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private readonly API = 'api/chamados';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(this.API);
  }
}
