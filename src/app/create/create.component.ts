
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({ 
    selector: 'app-create', 
templateUrl: './create.component.html',
styleUrls: ['./create.component.css']
 })
export class CreateComponent implements OnInit {
    EmployeeDetails: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.EmployeeDetails = this.formBuilder.group({
            
            employeeId: ['', Validators.required],
            employeeName: ['',Validators.required],
            gender: ['', Validators.required],
            bloodGroup: ['', Validators.required],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            pincode: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            joiningDate: ['',Validators.required],
            experience: ['',Validators.required],
            Photo: ['',Validators.required]
        } );
    }
 
    
    get f() { return this.EmployeeDetails.controls; }

     onSubmit() {
        this.submitted = true;

        
        if (this.EmployeeDetails.invalid) {
            return;
        }

        
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.EmployeeDetails.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.EmployeeDetails.reset();
    }
}
