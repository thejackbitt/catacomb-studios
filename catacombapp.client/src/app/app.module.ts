import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LogoutpageComponent } from './logoutpage/logoutpage.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { FourohfourpageComponent } from './fourohfourpage/fourohfourpage.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LazyLoaderComponent } from './lazy-loader/lazy-loader.component';

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
    AccLoginComponent,
    LoginComponent,
    HomepageComponent,
    LoginpageComponent,
    SignuppageComponent,
    LogoutpageComponent,
    DashboardpageComponent,
    FourohfourpageComponent,
    LogoutComponent,
    SignupComponent,
    FourohfourComponent,
    DashboardComponent,
    LazyLoaderComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [SleepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
