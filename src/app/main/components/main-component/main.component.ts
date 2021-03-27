import {Component} from '@angular/core';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.userLogedIn) {
      this.router.navigate(['/login']);
    }
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
