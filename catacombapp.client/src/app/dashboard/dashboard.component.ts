import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userEmail: string = '';
  userPfp: number | null = null;
  userName: string = '';
  loading: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getSessionInfo().subscribe(
      (data) => {
        console.log('Received session info:', data);
        this.userEmail = data.email;
        this.userPfp = data.profilePic;
        this.userName = data.username;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching session info:', error);
        this.loading = false;
      }
    );
  }

}
