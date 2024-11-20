import { Component, Input } from '@angular/core';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() imageOutput: string[] = [];
  constructor(private ss: SleepService) { }

  currentIndex: number = 0;
  timerId: any;

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imageOutput.length;
    this.resetTimer();
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imageOutput.length) % this.imageOutput.length;
    this.resetTimer();
  }

  setImage(index: number): void {
    this.currentIndex = index;
    this.resetTimer();
  }

  async imageLoop() {
    this.timerId = setTimeout(async () => {
      this.currentIndex = (this.currentIndex + 1) % this.imageOutput.length;
      this.imageLoop();
    }, 7000);
  }

  resetTimer(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.imageLoop();
  }

  ngOnInit() {
    this.imageLoop();
  }
}
