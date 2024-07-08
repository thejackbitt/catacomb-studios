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

  ctaInput = [
    {
      title: "Gonkville",
      image: '/assets/NewFolder/Preview.png',
      buttonType: "AMZN",
      buttonHref: "https://jackbittner.net/",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    }
  ];

  title = 'catacombapp.client';
}
