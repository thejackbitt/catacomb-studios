import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {
  @Input() ctaOutput: any;

  public ctaClicked = false;

  public sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  public async changeCtaClass() {
    this.ctaClicked = !this.ctaClicked;
    await this.sleep(150);
    this.ctaClicked = !this.ctaClicked;

  }
}
