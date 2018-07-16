import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PhoneSubmission, PhoneService, Phone } from '../api/phone.service';

@Component({
  selector: 'app-add-phone-page',
  templateUrl: './add-phone-page.component.html',
  styleUrls: ['./add-phone-page.component.css']
})
export class AddPhonePageComponent implements OnInit {
  userForm: PhoneSubmission = new PhoneSubmission();

  constructor(
    private myPhoneServ: PhoneService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
  }

  phoneSubmit() {
    // pass the form inputs to the service
    this.myPhoneServ.postPhone(this.userForm)
      .then((response: Phone) => {
        // redirect away to the details page of the new phone
        this.myRouterServ.navigateByUrl(`/phone/${response._id}`);
      })
      .catch((err) => {
        alert("Sorry! There was a problem submitting your phone! 😰");
        console.log(err);
      });
  }
}
