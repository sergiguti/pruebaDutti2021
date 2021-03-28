import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../shared/models/user/user';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../shared/services/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    dataLoading = false;

    constructor(private fb: FormBuilder, private router: Router, private toastrService: ToastrService, private authService: AuthService) {
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
        if (!this.registerForm.invalid) {
            const newUser: User = this.registerForm.getRawValue();
            if (this.authService.registerNewUser(newUser)) {
                this.toastrService.success(`El usuario ${newUser.userName} se ha creado correctamente.`, 'Usuario creado correctamente');
                this.router.navigate(['/login']);
            }
        } else {
            this.toastrService.error('Rellene o cumpla los requisitos de los campos', 'Formulario inválido');
        }
    }

}
