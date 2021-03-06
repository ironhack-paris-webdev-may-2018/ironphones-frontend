import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const { backendUrl } = environment;


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
      .get(
        `${backendUrl}/api/phones`,
        { withCredentials: true } // send cookies across domains
      )
      .toPromise();
  }

  // GET /api/phone/:id
  getPhoneItem(id) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .get(
        `${backendUrl}/api/phone/${id}`,
        { withCredentials: true } // send cookies across domains
      )
      .toPromise();
  }

  // DELETE /api/phone/:id
  deletePhoneItem(id) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .delete(
        `${backendUrl}/api/phone/${id}`,
        { withCredentials: true } // send cookies across domains
      )
      .toPromise();
  }

  // POST /api/phones
  postPhone(phoneInfo: PhoneSubmission) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .post(
        `${backendUrl}/api/phones`,
        phoneInfo,
        { withCredentials: true } // send cookies across domains
      )
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
