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

  // GET /api/phone/:id
  getPhoneItem(id) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .get(`${backendUrl}/api/phone/${id}`)
      .toPromise();
  }

  // DELETE /api/phone/:id
  deletePhoneItem(id) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .delete(`${backendUrl}/api/phone/${id}`)
      .toPromise();
  }

  // POST /api/phones
  postPhone(phoneInfo: PhoneSubmission) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .post(`${backendUrl}/api/phones`, phoneInfo)
      .toPromise();
  }
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

export class PhoneSubmission {
  brand: string;
  name: string;
  image: string;
  specs: Array<string> = [];
}
