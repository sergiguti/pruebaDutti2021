import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],

    });
  }

  registerUser() {
    if (!this.registerForm.invalid) {
      // TODO : Falta integrar el servicio para registrar al usuario
      // JSON simulando usuarios
      const userLogin = this.registerForm.value;
      usersList.push(userLogin);
      console.log('User Register -->', usersList);
      this.router.navigate(['/ships']);
    }
  }

}
