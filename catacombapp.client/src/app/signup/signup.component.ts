import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router, private globalService: GlobalService, private loaderService: LoaderService) { }

  signup(): void {
    this.error = '';

    if (this.username && this.email && this.password) {
      this.loaderService.showLoader();

      const body = new HttpParams()
        .set('username', this.username)
        .set('email', this.email)
        .set('password', this.password);

      const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

      this.http.post(`${this.globalService.apiEndpoint}/register`, body.toString(), { headers, responseType: 'text' })
        .subscribe({
          next: (response: any) => {
            console.log('Registration successful:', response);
            this.router.navigate(['/dashboard']);
            this.loaderService.hideLoader();
          },
          error: (err: any) => {
            console.log('Error response:', err);
            this.error = err.error?.message || 'Registration failed.';
            this.loaderService.hideLoader();
          }
        });
    } else {
      this.error = 'Please enter username, email, and password.';
    }
  }
}
