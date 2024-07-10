import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.css'
})
export class BurgerComponent {
  constructor(private ss: SleepService) { };
  public async toggleMenu() {

    const navicon2 = document.querySelector("#burgerBtn");
    const iconwrap = document.querySelector("#burgerBtn>div");
    const span1_2 = document.querySelector("#burgerBtn>div>span:nth-child(1)");
    const bar = document.querySelector("#burgerBar");
    const menu = document.querySelector("#burgerMenu");

    console.log(span1_2);

    const span2_2 = document.querySelector("#burgerBtn>div>span:nth-child(2)");
    if (span1_2?.classList.contains("absolute")) {
      iconwrap?.classList.remove("space-y-1");
      iconwrap?.classList.add("space-y-2");
      span1_2?.classList.remove("absolute", "rotate-45");
      span2_2?.classList.remove("-rotate-45");
      menu?.classList.add("options-closed");
      bar?.classList.add("container-closed");
    } else {
      iconwrap?.classList.remove("space-y-2");
      iconwrap?.classList.add("space-y-1");
      span1_2?.classList.add("absolute", "rotate-45");
      span2_2?.classList.add("-rotate-45");
      menu?.classList.remove("options-closed");
      bar?.classList.remove("container-closed");
    }
  }
};
