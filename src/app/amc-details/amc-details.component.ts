import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-amc-details',
  templateUrl: './amc-details.component.html',
  styleUrls: ['./amc-details.component.css']
})
export class AmcDetailsComponent implements OnInit {
  amcdetails:FormGroup;
  submitted=false;

  constructor(private amcbuilder:FormBuilder)
  {

  }
  ngOnInit()
  {
    this.amcdetails=this.amcbuilder.group({
      id:['',Validators.required],
      producttype:['',Validators.required],
      customerid:['',Validators.required],
      date:['',Validators.required],
      timeperiod:['',Validators.required],
      price:['',Validators.required],
      discount:['',Validators.required],
    },
    );
  
}

get x(){return this.amcdetails.controls;
}

onSubmit()
{
  this.submitted=true;
  if (this.amcdetails.invalid)
  {return;}
alert('SUCCESS! :-) \n\n' +JSON.stringify(this.amcdetails.value))
}
}

