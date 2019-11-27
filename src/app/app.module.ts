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





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,

    LoginComponent,
    HomeComponent,
    RecaptureComponent,
    PhoneComponent

   
  ],

  imports: [
    BrowserModule,
    NgxPhoneNumberInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    MaterialModule,
    FormsModule

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




