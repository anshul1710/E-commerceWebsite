import { Component, OnInit } from '@angular/core';
import {ProductsServieService} from '../products-servie.service';
import {parseHttpResponse} from 'selenium-webdriver/http';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CartserviceService} from '../cartservice.service';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private httpClientService: ProductsServieService, private cart: CartserviceService) {
  }

  private products;
  private id;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const temp = params.get('id');
      this.id = temp;
      this.httpClientService.getProductById(this.id).subscribe(data => {
        this.products = data;
      });
    });
  }

  addThisToCart(id) {
    this.cart.addToCart(id).subscribe((data) =>
      console.log(data));
    alert('added to cart');
  }
}
