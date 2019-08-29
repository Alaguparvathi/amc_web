import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  url = "http://192.168.0.113:8190/company/"
  myUrl;

  constructor(private http:HttpClient) { }

  // POST CUSTOMER DETAILS

  postCustomerDetail(data) {
    
    this.myUrl = this.url + 'customers'

    let obj = {
      "name":data.firstName + data.lastName,
      "gender":data.gender,
      "emailid":data.emailId,
      "dob":data.dob,
      "address":data.address,
      "state":data.state,
      "city":data.city,
      "phno":data.phoneNumber,
      "alterphno":data.alternateNumber,
      "pincode":data.pincode

    }

    console.log("Object", obj)
    return this.http.post(this.myUrl , obj)
        .subscribe(res => console.log('Done',res));
  } 

   // POST PRODUCT DETAILS

  postProductDetail(data) {
    
    this.myUrl = this.url + 'customers'

    let obj = {
      "name":data.firstName + data.lastName,
      "gender":data.gender,
      "emailid":data.emailId,
      "dob":data.dob,
      "address":data.address,
      "state":data.state,
      "city":data.city,
      "phno":data.phoneNumber,
      "alterphno":data.alternateNumber,
      "pincode":data.pincode

    }

    console.log("Object", obj)
    return this.http.post(this.myUrl , obj)
        .subscribe(res => console.log('Done',res));
  } 
}
