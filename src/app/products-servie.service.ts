import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {Observable} from 'rxjs';

export interface Product {
  productId: number;
  name: string;
  price: number;
  image: string;
  category: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsServieService {
  private url = 'http://localhost:1234';
  constructor(private httpClient: HttpClient) { }
  getAllProducts(): Observable<Product[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('anshul@gmail.com' + ':' + 'anshul') });
    return this.httpClient.get<Product[]>(this.url + '/all', {headers});
  }
  getProductByCategory(cat) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('anshul@gmail.com' + ':' + 'anshul') });
    return this.httpClient.get(this.url + '/product-detail/' + cat, {headers} );
  }
  getProductById(id) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('anshul@gmail.com' + ':' + 'anshul') });

    return this.httpClient.get(this.url + '/product/' + id , {headers});
  }
  getProductByCategoryAndPriceBetween(categ, min , max) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('anshul@gmail.com' + ':' + 'anshul') });

    return this.httpClient.get(this.url + '/products-cat/' + categ + '/' + min + '/' + max, {headers} );
  }
  getProductByPriceBetween(min , max) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('anshul@gmail.com' + ':' + 'anshul') });

    return this.httpClient.get(this.url + '/all-Products' + '/' + min + '/' + max, {headers} );
  }
  addProduct(product) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.httpClient.post(this.url + '/enter', product, {headers});
  }
  editProductDetails(product) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.httpClient.post<Product>(this.url + '/editProduct' , product, {headers});
  }
  removeProducts(id) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.httpClient.get(this.url + '/product-del/' + id, {headers});
  }
  getSearchedResult(searchedItem) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('anshul@gmail.com' + ':' + 'anshul') });
    return this.httpClient.get(this.url + '/search/' + searchedItem,{headers});
  }
}

