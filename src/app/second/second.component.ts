import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  ServiceDetails: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ServiceDetails = this.formBuilder.group({
      CustomerId:['', Validators.required],
      Date: ['', Validators.required],
      Complaint: ['', Validators.required],
      SparesReplaced: ['', Validators.required],
      Amount: ['', Validators.required],
      Remarks: ['', Validators.required],
      ServicedBy: ['', Validators.required],
      CustomerSignature:['', Validators.required],
      CustomerFeedback:['', Validators.required],
  
        });

  }
  get f() { return this.ServiceDetails.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.ServiceDetails.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ServiceDetails.value, null, 4));
    //     this.db.postCustomerDetail(this.billingDetails.value);
    // }
      }

    onReset() {
        this.submitted = false;
        this.ServiceDetails.reset();
    }
}


  


