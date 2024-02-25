import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  imports: [FormsModule],
  standalone: true,
})
export class AuthComponent {
  onLogin(form: NgForm): void {
    console.log('Login form: ', form);
  }
}
