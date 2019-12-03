import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-header',
  templateUrl: './orders-header.component.html',
  styleUrls: ['./orders-header.component.css']
})
export class OrdersHeaderComponent implements OnInit {
  links = ['approve-orders', 'create-orders', 'pending-orders'];


  constructor() { }

  ngOnInit() {
  }

}
