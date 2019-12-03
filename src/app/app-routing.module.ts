import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PaymentnoticeComponent } from './paymentnotice/paymentnotice.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent },
  { path: "buyerdashboard", component: BuyerDashboardComponent },
  { path: 'payment notice', component: PaymentnoticeComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
