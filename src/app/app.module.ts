import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PhoneListPageComponent } from './phone-list-page/phone-list-page.component';
import { PhoneDetailsPageComponent } from './phone-details-page/phone-details-page.component';
import { AddPhonePageComponent } from './add-phone-page/add-phone-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NotFoundPageComponent,
    PhoneListPageComponent,
    PhoneDetailsPageComponent,
    AddPhonePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
