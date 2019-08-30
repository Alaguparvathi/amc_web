import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DbService } from './db.service';
import { ThirdComponent } from './third/third.component';
import { PartsComponent } from './parts/parts.component';
import { CreateComponent } from './create/create.component';
import { AmcDetailsComponent } from './amc-details/amc-details.component';
import { SalarydetailsComponent } from './salarydetails/salarydetails.component';
import { NgMultiSelectDropDownModule } from'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    PartsComponent,
    CreateComponent,
    AmcDetailsComponent,
    SalarydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
   
],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
