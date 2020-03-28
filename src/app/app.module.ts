import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './pages/front/home/home.component';
import { HeaderComponent } from './includes/front/header/header.component';
import { TopNavbarComponent } from './includes/dashboard/top-navbar/top-navbar.component';
import {_MatMenuDirectivesModule, MatIconModule, MatMenuModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './includes/front/footer/footer.component';
import { AboutComponent } from './pages/front/about/about.component';
import { ContactComponent } from './pages/front/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopNavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
