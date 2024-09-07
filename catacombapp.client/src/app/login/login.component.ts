import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(): void {
    this.error = '';

    if (this.email && this.password) {
      const body = new HttpParams()
        .set('email', this.email)
        .set('password', this.password);

      const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

      this.http.post('https://localhost:7167/api/Auth/login', body.toString(), { headers, responseType: 'text' })
        .subscribe({
          next: (response: any) => {
            console.log('Login successful:', response);
            this.router.navigate(['/dashboard']);
          },
          error: (err: any) => {
            console.log('Error response:', err);
            this.error = err.error?.message || 'Login failed. Please check your credentials.';
          }
        });
    } else {
      this.error = 'Please enter both email and password.';
    }
  }
}
