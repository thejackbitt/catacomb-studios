import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { AuthService } from '../services/auth.service';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgorconfirmation',
  templateUrl: './forgorconfirmation.component.html',
  styleUrl: './forgorconfirmation.component.css'
})
export class ForgorconfirmationComponent {
  constructor(private http: HttpClient, private router: Router, private globalService: GlobalService, private authService: AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }
}
