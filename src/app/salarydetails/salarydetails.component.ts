import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-salarydetails',
  templateUrl: './salarydetails.component.html',
  styleUrls: ['./salarydetails.component.css']
})
export class SalarydetailsComponent implements OnInit {

  SalaryDetails: FormGroup;
  submitted = false;
title ='Salary Details';
   
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.SalaryDetails = this.formBuilder.group({
          employeeName: ['', Validators.required],
          employeeId: ['', Validators.required],
          accountNo: ['', Validators.required],
          accountName : ['', Validators.required],
          bankDetails: ['', Validators.required],
          IFSC: ['', Validators.required],
                     
           });
    }

    // convenience getter for easy access to form fields
    get f() { return this.SalaryDetails.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.SalaryDetails.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.SalaryDetails.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.SalaryDetails.reset();
    }
}

