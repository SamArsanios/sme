import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RecaptureComponent } from './recapture/recapture.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PhoneComponent } from './phone/phone.component';
import { RecaptchaModule } from 'ng-recaptcha';

import { NgxPhoneNumberInputModule } from   '../../projects/phone-input/src/public_api';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { PaymentnoticeComponent } from './paymentnotice/paymentnotice.component';
import { BuyerHeaderComponent } from './buyer-header/buyer-header.component';
import { OrdersComponent } from './orders/orders.component';
import { ApproveOrdersComponent } from './approve-orders/approve-orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { OrdersHeaderComponent } from './orders-header/orders-header.component';
import { InviteContactsComponent } from './invite-contacts/invite-contacts.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,

    LoginComponent,
    HomeComponent,
    RecaptureComponent,
    PhoneComponent,
    BuyerDashboardComponent,
    PaymentnoticeComponent,
    BuyerHeaderComponent,
    OrdersComponent,
    ApproveOrdersComponent,
    CreateOrderComponent,
    PendingOrdersComponent,
    OrdersHeaderComponent,
    InviteContactsComponent

   
  ],

  imports: [
    BrowserModule,
    NgxPhoneNumberInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    MaterialModule,
    FormsModule,

  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPhoneNumberInputModule,
    // FormBuilder,
    MaterialModule,
    FormsModule,
    RecaptchaModule
 ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}




