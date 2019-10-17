import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsServieService} from '../products-servie.service';
import {CartserviceService} from '../cartservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router , private http: ProductsServieService, private cart: CartserviceService) { }
private products : any;
  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
        this.http.getAllProducts().subscribe(data => {
          this.products = data;
          console.log(data);
        }, (error => {
          console.log(error);
        }));
    });
  }
  getProdByPrice(min, max) {
    this.http.getProductByPriceBetween(min, max).subscribe(data => {
     this.products = data;
    });
  }
  addThisToCart(id) {
    this.cart.addToCart(id).subscribe((data) =>
      console.log(data));
    alert('added to cart');
  }
  getProd(prodId) {
    this.router.navigate(['productdetail' , prodId]);
  }
}
