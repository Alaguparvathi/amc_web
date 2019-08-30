import { Routes } from '@angular/router';
import { FirstComponent } from 'src/app/first/first.component';
import { SecondComponent } from 'src/app/second/second.component';
import { ThirdComponent } from 'src/app/third/third.component';
import { Component } from '@angular/core';
import { PartsComponent } from 'src/app/parts/parts.component';
import { CreateComponent } from 'src/app/create/create.component';
import { SalarydetailsComponent } from 'src/app/salarydetails/salarydetails.component';
import { AmcDetailsComponent } from 'src/app/amc-details/amc-details.component';


export const appRoutes: Routes = [
  { path: 'first', 
    component: FirstComponent 
  },
  {
    path: 'second',
    component:  SecondComponent
  },
  {
    path: 'third',
    component: ThirdComponent 
  },
 {
    path: 'parts',
  component: PartsComponent
},
{
  path: 'create',
  component: CreateComponent
},
{
  path: 'salarydetails',
  component: SalarydetailsComponent
},
{
  path: 'amc-details',
  component: AmcDetailsComponent

}


];