import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const backendUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

  // GET /api/phones
  getList() {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .get(`${backendUrl}/api/phones`)
      .toPromise();
  }

  // POST /api/phones

  // GET /api/phone/:id

  // DELETE /api/phone/:id
}

export class Phone {
  _id: string;
  brand: string;
  name: string;
  image: string;
  specs: Array<string>;
  createdAt: string;
  updatedAt: string;
}
