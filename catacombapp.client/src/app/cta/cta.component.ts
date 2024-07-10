import { Component, Input } from '@angular/core';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {
  constructor(private ss:SleepService) {}

  @Input() ctaOutput: any;

  public ctaClicked = false;

  public async changeCtaClass() {
    this.ctaClicked = !this.ctaClicked;
    await this.ss.sleep(150);
    this.ctaClicked = !this.ctaClicked;

  }
}
