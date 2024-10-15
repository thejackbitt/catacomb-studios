import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
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
import { ProfileselectorComponent } from './profileselector/profileselector.component';
import { EmailselectorComponent } from './emailselector/emailselector.component';
import { ChangeemailComponent } from './changeemail/changeemail.component';
import { ChangeemailpageComponent } from './changeemailpage/changeemailpage.component';
import { ForgorpageComponent } from './forgorpage/forgorpage.component';
import { ForgorComponent } from './forgor/forgor.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { ResetpwpageComponent } from './resetpwpage/resetpwpage.component';
import { PwconfirmationpageComponent } from './pwconfirmationpage/pwconfirmationpage.component';
import { PwconfirmationComponent } from './pwconfirmation/pwconfirmation.component';
import { ForgorconfirmationComponent } from './forgorconfirmation/forgorconfirmation.component';
import { ForgorconfirmationpageComponent } from './forgorconfirmationpage/forgorconfirmationpage.component';
import { SocialComponent } from './social/social.component';
import { GonkvillepageComponent } from './gonkvillepage/gonkvillepage.component';
import { GonkvilleComponent } from './gonkville/gonkville.component';
import { AboutComponent } from './about/about.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { Hero2Component } from './hero2/hero2.component';

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
    LazyLoaderComponent,
    ProfileselectorComponent,
    EmailselectorComponent,
    ChangeemailComponent,
    ChangeemailpageComponent,
    ForgorpageComponent,
    ForgorComponent,
    ResetpwComponent,
    ResetpwpageComponent,
    PwconfirmationpageComponent,
    PwconfirmationComponent,
    ForgorconfirmationComponent,
    ForgorconfirmationpageComponent,
    SocialComponent,
    GonkvillepageComponent,
    GonkvilleComponent,
    AboutComponent,
    AboutpageComponent,
    Hero2Component
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [SleepService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
