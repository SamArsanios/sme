import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";







import { HomeComponent } from "./home/home.component";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,

    LoginComponent,
    HomeComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
