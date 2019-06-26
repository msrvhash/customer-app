import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import {GridComponent} from "../Utility/CustomerApp.GridComponent"
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import {HttpModule} from "@angular/http"
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { MyInterceptor } from '../Utility/Utility.HttpInterceptor';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
     CustomerComponent , GridComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule ,
    HttpClientModule
  ],
  exports: [
    GridComponent
  ],
  providers: [
   {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor , 
  multi:true}

  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
