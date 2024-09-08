import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private globalService: GlobalService) { }

  private apiUrl = `${this.globalService.apiEndpoint}/session`;

  getSessionInfo(): Observable<any> {
    return this.http.get(this.apiUrl, { withCredentials: true });
  }
}
