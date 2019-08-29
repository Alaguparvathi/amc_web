import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DbService} from 'src/app/db.service'
import {DatabaseService} from 'src/app/database.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  customerDetails: FormGroup;
  submitted = false;

  title = 'Add Coin';
  constructor(private formBuilder: FormBuilder,
    private db:DbService,
    public database: DatabaseService
    
    ) { }

  ngOnInit() {
    this.customerDetails = this.formBuilder.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      alternateNumber: ['', Validators.required],
      emailId: ['', [Validators.required,Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
        });

  }
  get f() { return this.customerDetails.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.customerDetails.invalid) {
            return;
        }

        console.log(this.customerDetails.value)
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.customerDetails.value, null, 4));
        // this.database.getCustomer();
        // this.database.postCustomer(this.customerDetails.value);
        this.db.postCustomerDetail(this.customerDetails.value);
    }

    onReset() {
        this.submitted = false;
        this.customerDetails.reset();
        
    }
}


