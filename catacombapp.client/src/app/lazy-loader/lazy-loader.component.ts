import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loader',
  templateUrl: './lazy-loader.component.html',
  styleUrls: ['./lazy-loader.component.css']
})
export class LazyLoaderComponent implements OnInit {
  isLoading = true;
  fadeOut = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('load', () => {
      this.startFadeOut();
    });
  }

  startFadeOut() {
    this.fadeOut = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
