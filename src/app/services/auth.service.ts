import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = 'api/login';

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais) {
    return this.http.post(this.API, creds, {
      observe: 'response',
      responseType: 'text'
    });
  }
}
