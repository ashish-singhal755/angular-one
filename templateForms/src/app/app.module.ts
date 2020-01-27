import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { ValidatorDircDirective } from './validator-dirc.directive';
import { MyPipePipe } from './my-pipe.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCompComponent,
    LoginFormComponent,
    HomeCompComponent,
    DashboardCompComponent,
    ValidatorDircDirective,
    MyPipePipe,
    HomePageComponent,
    HeaderCompComponent,
    FooterCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
