import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-forgor',
  templateUrl: './forgor.component.html',
  styleUrl: './forgor.component.css'
})
export class ForgorComponent {
  email: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router, private globalService: GlobalService) { }

  requestPasswordReset() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new HttpParams().set('email', this.email);

    this.http.post(`${this.globalService.apiEndpoint}/send-password-change`, body.toString(), { headers, responseType: 'text', withCredentials: true })
      .subscribe({
        next: (response: any) => {
          console.log('Password reset link sent:', response);
          this.router.navigate(['/forgot-password/confirmation']);
        },
        error: (err: any) => {
          console.error('Error requesting password reset:', err);
          this.error = err.error?.message || 'Request failed. Please check your email.';
        }
      });
  }
}
