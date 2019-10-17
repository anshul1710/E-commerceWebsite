import { Component, OnInit } from '@angular/core';
import {Product, ProductsServieService} from '../products-servie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  // tslint:disable-next-line:new-parens
  private product: Product = new class implements Product {
    productId: number;
    category: string;
    details: string;
    image: string;
    name: string;
    price: number;
  };
  constructor(private router: Router, private productService: ProductsServieService) { }

  ngOnInit() {
  }
  addProduct() {
    console.log(this.product);
    if (this.product.name != null && this.product.category != null && this.product.details != null && this.product.image != null &&
      this.product.price != null) {
      if (this.product != null) {
        this.productService.addProduct(this.product).subscribe(data => {
          alert('New Product Added Successfully');
          this.router.navigate(['products/all']);
        });
      }
    } else {
      alert('Please fill all the details.');
    }
  }
}
