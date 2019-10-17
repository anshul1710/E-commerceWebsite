import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsServieService} from '../products-servie.service';
import {max, min} from 'rxjs/operators';
import {CartserviceService} from '../cartservice.service';
import {AuthenticationService} from '../authentication.service';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private loginService: AuthenticationService, private registrationService: UserServiceService, private route: ActivatedRoute, private router: Router , private http: ProductsServieService, private cart: CartserviceService) { }
  // tslint:disable-next-line:ban-types
  private products: Object = [];
  private category;
  private user;
  private role;
    ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      const categ = params.get('category');
      this.category = categ;
      if (this.category === 'home') {
        this.http.getAllProducts().subscribe(data => {
          this.products = data;
          console.log(data);
        }, (error => {
          console.log(error);
        }));
      } else {
        this.http.getProductByCategory(this.category).subscribe(data => {
          this.products = data;
        }, (error => {
          console.log('by categ error ' + error);
        }));
      }
    });
    this.registrationService.getUser().subscribe( data => {
      this.user = data;
      this.role = this.user.role;
    });
    }
    getProd(prodId) {
  this.router.navigate(['productdetail' , prodId]);
  }
  // tslint:disable-next-line:no-shadowed-variable
  getProdByCatAndPrice(min, max) {
    this.http.getProductByCategoryAndPriceBetween(this.category, min, max).subscribe(data => {
      this.products = data;
    });
  }
  addThisToCart(id) {
    this.cart.addToCart(id).subscribe((data) =>
      console.log(data));
    alert('added to cart');
  }
  editProduct(product) {
    this.router.navigate(['editproduct', product.productId]);
  }

  removeProduct(id) {
      this.http.removeProducts(id).subscribe((data) => console.log('product deleted'));
  }
  }
