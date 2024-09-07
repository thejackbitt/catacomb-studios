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
      preview: 'Test Link 1',
      link: '#'
    },
    {
      preview: 'Test Link 2',
      link: '#'
    },
    {
      preview: 'Test Link 3',
      link: '#'
    }
  ];

  title = 'catacombapp.client';
}
