import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'; 
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.component.html',
  styleUrls: ['./changeemail.component.css']
})
export class ChangeemailComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private globalService: GlobalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];

      if (token) {
        this.changeEmail(token);
      } else {
        console.error('Token not found in URL');
      }
    });
  }

  changeEmail(token: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const body = new HttpParams()
      .set('token', token);

    this.http.post(`${this.globalService.apiEndpoint}/change-email`, body.toString(), { headers, responseType: 'text', withCredentials: true })
      .subscribe({
        next: (response: any) => {
          console.log('Email changed successfully:', response);
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2000);
        },
        error: (err: any) => {
          console.error('Error during email change:', err);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        }
      });
  }
}
