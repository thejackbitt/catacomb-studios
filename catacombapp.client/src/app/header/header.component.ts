import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userEmail: string = '';
  userPfp: string = 'empty_sm.png';
  userName: string = '';
  loading: boolean = true;
  path = '/login';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userInfo$.subscribe(
      (data) => {
        if (data) {
          switch (data.profilePic) {
            case '0':
              this.userPfp = 'gus_sm.png';
              this.path = '/dashboard';
              break;
            case '1':
              this.userPfp = 'horse_sm.png';
              this.path = '/dashboard';
              break;
            case '2':
              this.userPfp = 'papa_sm.png';
              this.path = '/dashboard';
              break;
            case '3':
              this.userPfp = 'troll_sm.png';
              this.path = '/dashboard';
              break;
            default:
              this.userPfp = 'empty_sm.png';
              this.path = '/login';
          }
          this.userName = data.username;
        } else {
          this.userPfp = 'empty_sm.png';
          this.path = '/login';
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating session info in header:', error);
        this.userPfp = 'empty_sm.png';
        this.path = '/login';
        this.loading = false;
      }
    );

    this.authService.updateSessionInfo();
  }
}
