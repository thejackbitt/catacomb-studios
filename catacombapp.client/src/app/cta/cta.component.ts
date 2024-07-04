import { Component, Input } from '@angular/core';

const card = document.querySelector(".cta-card");
card.addEventListener("click", card.classList.add("cta-clicked");

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {
  @Input() ctaOutput: any;
}
