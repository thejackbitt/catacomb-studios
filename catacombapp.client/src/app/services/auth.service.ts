import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${this.globalService.apiEndpoint}/session`;

  private userInfo = new BehaviorSubject<any>(null);
  userInfo$ = this.userInfo.asObservable();

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  getSessionInfo(): Observable<any> {
    return this.http.get(this.apiUrl, { withCredentials: true }).pipe(
      tap((data) => {
        this.userInfo.next(data);
      },
        (error) => {
          this.userInfo.next(null);
        })
    );
  }

  updateSessionInfo(): void {
    this.getSessionInfo().subscribe();
  }
}
