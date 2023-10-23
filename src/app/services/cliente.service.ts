import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'api/clientes';

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/${cliente.id}`, cliente);
  }

  delete(id: any): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.API}/${id}`);
  }
}
