import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
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
}
