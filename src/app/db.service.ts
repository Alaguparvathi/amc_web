import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DbService {

  url = "http://192.168.0.113:8190"
  
  myUrl;

  constructor(private http:HttpClient) {
      
   }

  // POST CUSTOMER DETAILS

  postCustomerDetail(data) {
    
    this.myUrl = this.url + '/customer/create'

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
        .subscribe(res => console.log('postCustomerDetail',res));
  } 

   // POST PRODUCT DETAILS

  postProductDetail(data) {
    
    this.myUrl = this.url + '/product/create'

    let obj = {
      "productId":data.productId,
      "productName":data.productName,
      "productType":data.productType,
      "productBrand":data.productBrand,
      "productModel":data.productModel,
      "modelNumber":data.modelNumber,
      "productQuantity":data.productQuantity,
      "productSize":data.productSize,
      "productColor":data.productColor,
      "productWarranty":data.productWarranty,
      "accessories":data.accessories,
      "energyConsumption":data.energyConsumption,
      "productPrice":data.productPrice,
      "discount":data.discount

    }

    console.log("postProductDetail", obj)
    return this.http.post(this.myUrl , obj)
        .subscribe(res => console.log('postProductDetail Response',res));
  }
  
  postSpareParts(data) {
    
    this.myUrl = this.url + '/product/parts/create'

    let obj = {
      "PartID": data.PartID,
      "Accessories": data.Accessories,
      "SKU": data.SKU,
      "Description": data.Description
    }

    console.log("postSpareParts", obj)
    return this.http.post(this.myUrl , obj)
        .subscribe(res => console.log('postSpareParts Response',res));
  } 
}
