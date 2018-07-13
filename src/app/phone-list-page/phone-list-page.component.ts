import { Component, OnInit } from '@angular/core';
import { PhoneService, Phone } from '../api/phone.service';

@Component({
  selector: 'app-phone-list-page',
  templateUrl: './phone-list-page.component.html',
  styleUrls: ['./phone-list-page.component.css']
})
export class PhoneListPageComponent implements OnInit {
  phones: Array<Phone> = [];

  constructor(
    private myPhoneServ: PhoneService
  ) { }

  ngOnInit() {
    this.fetchPhones();
  }

  fetchPhones() {
    this.myPhoneServ.getList()
      .then((response: Array<Phone>) => {
        // connects the DATA from the API to the COMPONENT state
        this.phones = response;
      })
      .catch((err) => {
        alert("Sorry! We couldn't get our list of phones. 😕");
        console.log(err);
      });
  }
}
