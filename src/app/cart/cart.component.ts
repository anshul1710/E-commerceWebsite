import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../cartservice.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartserviceService, private router: Router) { }
 private prod;
  private total = 0;
  ngOnInit() {
    this.cart.showMyCart().subscribe(data => {
      this.prod = data;
      console.log(this.prod.length);
      let total = 0;
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < this.prod.length; i++) {
        total = total + this.prod[i].product.price * this.prod[i].quantity;
      }
      this.total = total;
    });
  }
removeOne(id: any) {
  this.cart.removeOne(id).subscribe( data1 => {
    this.cart.showMyCart().subscribe(data => {
      this.prod = data;
      let total = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.prod.length; i++) {
        total = total + this.prod[i].product.price * this.prod[i].quantity;
      }
      this.total = total;
    });
  });
  }
addOne(id: any) {
    console.log(id);
    this.cart.addToCart(id).subscribe(data1 => {
    this.cart.showMyCart().subscribe(data => {
      this.prod = data;
      let total = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.prod.length; i++) {
        total = total + this.prod[i].product.price * this.prod[i].quantity;
      }
      this.total = total;
    });
  });
}
removeProduct(id: any) {
  this.cart.removeWholeProduct(id).subscribe(data1 => {
    this.cart.showMyCart().subscribe(data => {
      this.prod = data;
      let total = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.prod.length; i++) {
        total = total + this.prod[i].product.price * this.prod[i].quantity;
      }
      this.total = total;
    });
  });
}

  navTOProductDetail(productId: any) {
    this.router.navigate(['productdetail' , productId ]);
  }
  checkOut() {
    this.router.navigate(['home']);
  }
}
