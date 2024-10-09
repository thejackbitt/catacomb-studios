import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { AuthService } from '../services/auth.service';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router, private globalService: GlobalService, private authService: AuthService) { }

  ngOnInit(): void {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    this.http.post(`${this.globalService.apiEndpoint}/logout`, {}, { headers, responseType: 'text', withCredentials: true })
      .subscribe({
        next: (response: any) => {
          console.log('Logout successful:', response);
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        error: (err: any) => {
          console.log('Error during logout:', err);
          this.router.navigate(['/']);
        }
      });

    this.authService.updateSessionInfo();
  }
}
