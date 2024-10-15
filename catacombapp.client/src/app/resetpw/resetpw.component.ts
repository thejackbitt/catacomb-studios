import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrl: './resetpw.component.css'
})
export class ResetpwComponent implements OnInit {
  password: string = '';
  confirmPassword: string = '';
  token: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  resetPassword() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new HttpParams().set('token', this.token).set('newPassword', this.password);

    this.http.post(`${this.globalService.apiEndpoint}/reset-password`, body.toString(), { headers, responseType: 'text', withCredentials: true })
      .subscribe({
        next: (response: any) => {
          console.log('Password reset successful:', response);
          this.router.navigate(['/reset-password/confirmation']);
        },
        error: (err: any) => {
          console.error('Error resetting password:', err);
          this.error = err.error?.message || 'Password reset failed.';
        }
      });
  }
}
