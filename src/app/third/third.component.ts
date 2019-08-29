import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  productDetails: FormGroup;
  submitted = false; 

  constructor(private formbuilder:FormBuilder ) { }

  ngOnInit() {
    this.productDetails=this.formbuilder.group({
      productId:['', Validators.required],
      productName:['',[Validators.required,Validators.pattern]],
      productType:['',Validators.required],
      productBrand:['',Validators.required],
      productModel:['',Validators.required],
      modelNumber:['',Validators.required],
      productQuantity:['',Validators.required],
      productSize:['',Validators.required],
      productColor:['',Validators.required],
      productWarranty:['',Validators.required],
      accessories:['',Validators.required],
      energyConsumption:['',Validators.required],
      productPrice:['',Validators.required],
      discount:['',Validators.required],
    });
  }

  get f() { return this.productDetails.controls; }

  onSubmit() {

  this.submitted = true;

    if (this.productDetails.invalid) {
    return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.productDetails.value, null, 4));
    }
    onReset() {
      this.submitted = false;
      this.productDetails.reset();
  }
}



