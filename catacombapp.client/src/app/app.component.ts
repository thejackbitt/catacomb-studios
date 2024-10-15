import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit() {}

  constructor(private http: HttpClient) { }

  linkInput = [
    {
      preview: 'Home',
      link: '/'
    },
    {
      preview: 'Gonkville',
      link: '/gonkville'
    },
    {
      preview: 'About Us',
      link: '/about'
    }
  ];

  title = 'catacombapp.client';
}
