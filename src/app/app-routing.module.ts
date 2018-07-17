import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PhoneListPageComponent } from './phone-list-page/phone-list-page.component';
import { PhoneDetailsPageComponent } from './phone-details-page/phone-details-page.component';
import { AddPhonePageComponent } from './add-phone-page/add-phone-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "phones", component: PhoneListPageComponent },
  { path: "phone/add", component: AddPhonePageComponent },
  { path: "phone/:phoneId", component: PhoneDetailsPageComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
