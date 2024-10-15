import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { AuthService } from '../services/auth.service';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pwconfirmation',
  templateUrl: './pwconfirmation.component.html',
  styleUrl: './pwconfirmation.component.css'
})
export class PwconfirmationComponent {
  constructor(private http: HttpClient, private router: Router, private globalService: GlobalService, private authService: AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
