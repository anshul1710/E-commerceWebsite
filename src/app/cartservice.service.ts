import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:1234';

  addToCart(id: any) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/addToCart/' + id, {headers});
  }

  showMyCart() {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/showCart', {headers});
  }

  removeOne(id: any) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/removeOneFromCart/' + id, {headers});
  }

  removeWholeProduct(id: any) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/removeFromCart/' + id, {headers});
  }
  showOrderHistory() {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/checkout', {headers});

  }
}

