import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url = " http://192.168.0.115:8090/product"
  myUrl;

  constructor(
    private http: HttpClient
  ) { }

  getCustomer(){

    // this.myUrl = this.url + '/product'
    
    this.myUrl = "http://192.168.0.113:8190/company/customers"

    return this.http.get(this.myUrl).subscribe(result =>{
      console.log("Result",result)
    })
  }

  postCustomer(data){
    this.myUrl = this.url + '/products'

    console.log(this.myUrl)

    let body = {
      "fullName":data.firstName + data.lastName,
      "dateOfBirth":data.dob,
      "placeOfBirth":"nallai",
      "maritalStatus":"unmarried",
      "fatherName":"suresh",
       "category":"bc",
      "currentAddress":"pudupalayam",
      "permanentAddress":"pudupalayam",
       "identificationMark":"nu",
      "height":"5",
      "mobleNo":data.phoneNumber,
       "accountNo":"178878554",
      "ifscCode":"c788752minkm",
      "branchName":"cuddalore",
      "telePhone":"85452645463",
      "emailId":data.emailId,
    }
    
  
    return this.http.post(this.myUrl, body).subscribe(res =>{
      console.log(res)
    })
      
    
  }

}
