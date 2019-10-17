import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartserviceService} from '../cartservice.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {

  private OrderHistory;
  constructor(private cartService: CartserviceService, private router: Router) { }

  ngOnInit() {
    this.cartService.showOrderHistory().subscribe(data => this.OrderHistory = data);
  }

  checkDetails(id) {
    console.log(this.OrderHistory);
    this.router.navigate(['productdetail', id]);
  }
 }
