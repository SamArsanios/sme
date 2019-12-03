import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-header',
  templateUrl: './buyer-header.component.html',
  styleUrls: ['./buyer-header.component.css']
})
export class BuyerHeaderComponent{
  links = ['Account Settings', 'purchase', 'invoices', 'invite', 'Vault', 'payment notice'];
  // activeLink = this.links[0];

}
