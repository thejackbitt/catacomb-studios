import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LogoutpageComponent } from './logoutpage/logoutpage.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { FourohfourpageComponent } from './fourohfourpage/fourohfourpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignuppageComponent },
  { path: 'logout', component: LogoutpageComponent },
  { path: 'dashboard', component: DashboardpageComponent },
  { path: '**', component: FourohfourpageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
