import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserAccessguardGuard } from './user-accessguard.guard';
import { AboutusCompComponent } from './aboutus-comp/aboutus-comp.component';
import { ContactusCompComponent } from './contactus-comp/contactus-comp.component';
import { ResterUserCompComponent } from './rester-user-comp/rester-user-comp.component';


const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'home', component: HomeCompComponent,  
  children: [
    { path: 'dashboard', component: ResterUserCompComponent },
    { path: 'contactus', component: ContactusCompComponent },
    { path: 'aboutus', component: AboutusCompComponent },
    { path: '', component:HomePageComponent  }
  ],canActivate:[UserAccessguardGuard]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
