import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AboutModule } from './about/about.module';
import { ProfileModule } from './profile/profile.module';

import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ,AppRoutingModule ],
  declarations: [ AppComponent, DashboardComponent, AboutComponent, ProfileComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
