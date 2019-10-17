import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {UserServiceService} from '../user-service.service';
import {ProductsServieService} from '../products-servie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private loginService: AuthenticationService, private registrationService: UserServiceService, private product: ProductsServieService) { }
private user;
  private role;
  private searchedItem: any;
  private res;
  @Output() private childEvent = new EventEmitter();
  ngOnInit() {
    this.registrationService.getUser().subscribe( data => {
      this.user = data;
      this.role = this.user.role;
    });
  }
  searchOnClick() {
    console.log(this.searchedItem);
    // tslint:disable-next-line:triple-equals
    if (this.searchedItem != undefined && this.searchedItem != '') {
      this.product.getSearchedResult(this.searchedItem).subscribe(data => {
       this.res = data;
       this.childEvent.emit(this.res);
      });
    }
  }
}
