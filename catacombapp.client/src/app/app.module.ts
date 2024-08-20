import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SleepService } from './services/sleep.service';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { CtaComponent } from './cta/cta.component';
import { BurgerComponent } from './burger/burger.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { AccNewComponent } from './acc-new/acc-new.component';
import { AccLoginComponent } from './acc-login/acc-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    InfoComponent,
    CtaComponent,
    BurgerComponent,
    SiderbarComponent,
    AccNewComponent,
    AccLoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [SleepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
