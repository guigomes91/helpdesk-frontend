import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/models/credenciais';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  constructor(private toast: ToastrService,
    private service: AuthService) {}

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.toast.info(resposta.headers.get('Authorization'))
    })
  }
}
