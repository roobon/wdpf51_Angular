import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRouter:Routes = [
  {path:'', component: AppComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, RouterModule.forRoot(appRouter) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
