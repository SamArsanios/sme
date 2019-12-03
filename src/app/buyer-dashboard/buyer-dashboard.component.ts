import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent{
  links = ['First', 'Second', 'Third'];
  // activeLink = this.links[0];
}
