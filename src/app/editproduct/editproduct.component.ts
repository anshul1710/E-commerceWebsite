import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsServieService} from '../products-servie.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  private productId;
  private product;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsServieService,
              private loginService: AuthenticationService) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.productId = id;
      this.productService.getProductById(id).subscribe(data => {
        this.product = data;
      });
  });
  }
  editProduct() {
    console.log(this.product);
    this.productService.editProductDetails(this.product).subscribe(data => {
      this.product = data;
      alert('Product Details updated successfully.');
      this.router.navigate(['home']);
    });
  }
}
