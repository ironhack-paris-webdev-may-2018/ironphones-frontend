import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhoneService, Phone } from '../api/phone.service';

@Component({
  selector: 'app-phone-details-page',
  templateUrl: './phone-details-page.component.html',
  styleUrls: ['./phone-details-page.component.css']
})
export class PhoneDetailsPageComponent implements OnInit {
  id: string;
  phoneItem: Phone;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myPhoneServ: PhoneService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
      .subscribe((myParams) => {
        // "phoneId" comes from the route's PATH
        // { path: "phone/:phoneId", ... }
        this.id = myParams.get("phoneId");
        this.fetchPhoneDetails();
      });
  }

  fetchPhoneDetails() {
    this.myPhoneServ.getPhoneItem(this.id)
      .then((response: Phone) => {
        // connects the DATA from the API to the COMPONENT state
        this.phoneItem = response;
      })
      .catch((err) => {
        alert("Sorry! There was a problem getting the phone's details. 😅");
        console.log(err);
      });
  }

  deleteClick() {
    const { name } = this.phoneItem;
    const isOkay = confirm(`Delete phone ${name}?`);

    if (isOkay) {
      this.myPhoneServ.deletePhoneItem(this.id)
        .then(() => {
          // redirect away to the list page
          this.myRouterServ.navigateByUrl("/phones");
        })                // res.redirect("/phones") in Express
        .catch((err) => {
          alert("Sorry! There was a problem deleting the phone. 😨");
          console.log(err);
        });
    }
  }
}
