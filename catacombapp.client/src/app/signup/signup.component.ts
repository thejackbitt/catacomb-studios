import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router, private globalService: GlobalService) { }

  signup(): void {
    this.error = '';

    if (this.username && this.email && this.password) {
      const body = new HttpParams()
        .set('username', this.username)
        .set('email', this.email)
        .set('password', this.password);

      const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

      this.http.post(`${this.globalService.apiEndpoint}/register`, body.toString(), { headers, responseType: 'text' })
        .subscribe({
          next: (response: any) => {
            console.log('Registration successful:', response);
            this.router.navigate(['/dashboard']);

            this.sendWelcomeEmail();
          },
          error: (err: any) => {
            console.log('Error response:', err);
            this.error = err.error?.message || 'Registration failed.';
          }
        });
    } else {
      this.error = 'Please enter username, email, and password.';
    }
  }

  sendWelcomeEmail(): void {
    const emailBody = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome Email</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #424242;
            color: white;
            text-align: center;
            padding: 10px 0;
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .header img {
            display: block;
            margin: 0 auto;
            width: 150px;
            height: auto;
          }
          .content {
            padding: 20px;
            color: #333333;
            line-height: 1.6;
          }
          .content h2 {
            color: #424242;
            font-size: 20px;
            margin-bottom: 10px;
          }
          .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #777777;
          }
          .footer a {
            color: #424242;
            text-decoration: none;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #424242;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
              <img src="https://jackbittner.net/assets/images/white_logo.svg" alt="Catacomb Studios Logo"/>
          </div>
          <div class="content">
            <h2>Hello, ${this.username}</h2>
            <p>Welcome to Catacomb Studios!  Stay tuned for updates on our latest books and shows.  Click the button below to check out our brand new website.</p>
            <a href="https://localhost:4200/" style="color: white;" class="button">Learn More</a>
          </div>
          <div class="footer">
            <p>&copy; 2024 Catacomb Studios. All rights reserved.</p>
            <p><a href="https://localhost:4200/unsub" style="color: blue; text-decoration: underline;">Unsubscribe</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailPayload = new HttpParams()
      .set('recipientEmail', this.email)
      .set('subject', 'Welcome to Catacomb Studios!')
      .set('body', emailBody);

    const emailHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    this.http.post(`${this.globalService.apiEndpoint}/send`, emailPayload.toString(), { headers: emailHeaders, responseType: 'text' })
      .subscribe({
        next: (response: any) => {
          console.log('Welcome email sent successfully:', response);
        },
        error: (err: any) => {
          console.log('Error sending welcome email:', err);
        }
      });
  }
}
