import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DbService {

  url = "http://192.168.0.115:8190"
  
  myUrl;

  constructor(private http:HttpClient) {
      
   }

  // POST CUSTOMER DETAILS

  postCustomerDetail(data) {

    let response = new Observable((observer) =>{
    
      this.myUrl = this.url + '/customer/create'

      let obj = {
        "customerName":data.firstName + data.lastName,
        "gender":data.gender,
        "emailId":data.emailId,
        "dateOfBrith":data.dob,
        "address":data.address,
        "state":data.state,
        "city":data.city,
        "phoneNumber":data.phoneNumber,
        "alterPhoneNumber":data.alternateNumber,
        "pinCode":data.pincode

      }

      console.log("Object", obj)
      this.http.post(this.myUrl , obj).subscribe(result => {
        console.log('postCustomerDetail',result)
        observer.next(result)
        observer.complete();
      }),(error=>{
        console.log("Error",error)
      });
      
    })
    return response;

  } 

   // POST PRODUCT DETAILS

  postProductDetail(data) {

    let response = new Observable((observer)=> {

      this.myUrl = this.url + '/product/create'

      let obj = {
        // "productId":data.productId,
        "productName":data.productName,
        "productType":data.productType,
        "productMake":data.productBrand,
        // "productModel":data.productModel,
        // "modelNumber":data.modelNumber,
        // "productQuantity":data.productQuantity,
        // "productSize":data.productSize,
        "productColour":data.productColor,
        // "productWarranty":data.productWarranty,
        // "accessories":data.accessories,
        // "energyConsumption":data.energyConsumption,
        // "productPrice":data.productPrice,
        // "discount":data.discount
  
      }
  
      console.log("postProductDetail", obj)

      this.http.post(this.myUrl , obj).subscribe(result => {
        console.log('postProductDetail Response',result)
        observer.next(result);
        observer.complete();
      },(error) => {
        console.log("Error",error)
      });
    })
    
    return response;
  }
  
  postSpareParts(data) {

    let response = new Observable((observer) => {

      this.myUrl = this.url + '/product/parts/create'

      let obj = {
        // "PartID": data.PartID,
        "accessories": data.Accessories,
        "stockKeepingUnit": data.SKU,
        "description": data.Description
      }
  
      console.log("postSpareParts", obj)
      this.http.post(this.myUrl , obj).subscribe(result => {
        console.log('postSpareParts Response',result)
        observer.next(result);
        observer.complete();
      },(error) => {
        console.log("Error", error)
      });
    })
    return response;
  } 

}
