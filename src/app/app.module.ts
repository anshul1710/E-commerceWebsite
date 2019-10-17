import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NgxPopper } from 'angular-popper';
import { EditproductComponent } from './editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    CartComponent,
    ProductlistComponent,
    MyaccountComponent,
    ProductdetailComponent,
    LogoutComponent,
    OrderhistoryComponent,
    AddproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   NgxPopper
  ],
  providers: [ProductdetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
