import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserAccessguardGuard } from './user-accessguard.guard';


const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'home/:name/:mob', component: HomeCompComponent,  children: [
    { path: 'dashboard', component: DashboardCompComponent },
    { path: '', component:HomePageComponent  }
  ],canActivate:[UserAccessguardGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
