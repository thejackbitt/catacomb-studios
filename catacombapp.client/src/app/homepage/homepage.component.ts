import { Component } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  imageInput = [
    '/assets/NewFolder/HeroImage1.png',
    '/assets/NewFolder/HeroImage2.png',
    '/assets/NewFolder/HeroImage3.png'
  ]

  ngOnInit() {
    console.log(this.imageInput.length);
  }

  ctaInput = [
    {
      title: "OUT NOW: Gonkville",
      image: 'https://m.media-amazon.com/images/I/619vQTY9y8L._SY466_.jpg',
      buttonType: "AMZN",
      buttonHref: "https://www.amazon.com/dp/B0DFBSJJZ2?ref=cm_sw_r_apan_dp_E2MQVJ28FQEKV1601CYK&ref_=cm_sw_r_apan_dp_E2MQVJ28FQEKV1601CYK&social_share=cm_sw_r_apan_dp_E2MQVJ28FQEKV1601CYK&starsLeft=1&skipTwisterOG=1",
      body: "In this Gonkville story, little Gus learns that being a warrior isn't as glamorous as he thought. Join him as he learns the value of hard work and taking care of what you’ve been given. \n \nWARNING: This book is very cozy and it is recommended that you enjoy this book with a plate of lefse and lingonberries."
    }
  ];
}
