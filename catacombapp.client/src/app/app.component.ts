import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit() {}

  constructor(private http: HttpClient) {}

  imageInput = [
    '/assets/NewFolder/HeroImage1.png',
    '/assets/NewFolder/HeroImage2.png'
  ]

  title = 'catacombapp.client';
}
