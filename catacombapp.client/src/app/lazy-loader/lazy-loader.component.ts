import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-lazy-loader',
  templateUrl: './lazy-loader.component.html',
  styleUrls: ['./lazy-loader.component.css']
})
export class LazyLoaderComponent implements OnInit {
  isLoading = false;
  fadeOut = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.loaderState.subscribe((state: boolean) => {
      if (state) {
        this.isLoading = true;
        this.fadeOut = false;
      } else {
        this.startFadeOut();
      }
    });
  }

  startFadeOut() {
    this.fadeOut = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
