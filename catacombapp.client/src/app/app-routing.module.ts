import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LogoutpageComponent } from './logoutpage/logoutpage.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { ChangeemailpageComponent } from './changeemailpage/changeemailpage.component';
import { ResetpwpageComponent } from './resetpwpage/resetpwpage.component';
import { FourohfourpageComponent } from './fourohfourpage/fourohfourpage.component';
import { ForgorpageComponent } from './forgorpage/forgorpage.component';
import { PwconfirmationpageComponent } from './pwconfirmationpage/pwconfirmationpage.component';
import { ForgorconfirmationpageComponent } from './forgorconfirmationpage/forgorconfirmationpage.component';
import { GonkvillepageComponent } from './gonkvillepage/gonkvillepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignuppageComponent },
  { path: 'logout', component: LogoutpageComponent },
  { path: 'dashboard', component: DashboardpageComponent },
  { path: 'change-email', component: ChangeemailpageComponent },
  { path: 'forgot-password', component: ForgorpageComponent },
  { path: 'forgot-password/confirmation', component: ForgorconfirmationpageComponent},
  { path: 'reset-password', component: ResetpwpageComponent },
  { path: 'reset-password/confirmation', component: PwconfirmationpageComponent },
  //{ path: 'gonkville', component: GonkvillepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: '**', component: FourohfourpageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
