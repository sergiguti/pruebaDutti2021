import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../shared/models/user/user';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerUser() {
    const user: User = this.registerForm.getRawValue();

    if (!this.registerForm.invalid) {
      if (localStorage.getItem('users') == null) {
        const firstUser: User[] = [];
        localStorage.setItem('users', JSON.stringify(firstUser));
      }
      const users: User[] = JSON.parse(localStorage.getItem('users'));

      if (!this.usedUser(user.userName, user.email)) {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        this.toastrService.success(`El usuario ${user.userName} se ha creado correctamente.`, 'Usuario creado correctamente');
        this.router.navigate(['/login']);
      }
    } else {
      this.toastrService.error('Rellene o cumpla los requisitos de los campos', 'Formulario inválido');
    }
  }

  usedUser(userName: string, email: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users'));
    if (users != null) {
      return users.find(user => user.userName === userName && user.email === email) != null;
    }
    return false;
  }

}
