import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading = false;
  unregistered = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    if (!this.authService.userLoggedIn) {
      this.createLoginForm();
      this.toastrService.warning('Por favor, inicie sesión');
    } else {
      this.router.navigate(['/ships']);
    }
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      // this.authService.logIn(this.loginForm.getRawValue()).subscribe((resp: any) => {
      //   if (resp) {
      //     this.router.navigate(['']);
      //     sessionStorage.setItem('auth_token', resp.token);
      //   }
      // });

      const token: string = this.authService.logIn(this.loginForm.getRawValue());
      if (token != null) {
        this.toastrService.success(`Sesión iniciado con el usuario ${this.loginForm.get('userName').value} correctamente.`);
        this.router.navigate(['']);
        sessionStorage.setItem('auth_token', token);
      } else {
        this.toastrService.error('', 'Nombre de usuario o contraseña incorrecta');
      }
    }
  }
}
