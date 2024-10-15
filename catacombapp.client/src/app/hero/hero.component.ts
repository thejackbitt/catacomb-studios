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

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imageOutput.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imageOutput.length) % this.imageOutput.length;
  }

  setImage(index: number): void {
    this.currentIndex = index;
  }

  async imageLoop() {
    await this.ss.sleep(7000);
    this.currentIndex = (this.currentIndex + 1) % this.imageOutput.length;
    this.imageLoop();
  }

  ngOnInit() {
    this.imageLoop();
  }
}
