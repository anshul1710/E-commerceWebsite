import { Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {ProductlistComponent} from './productlist/productlist.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGuardService} from './auth-guard.service';
import {MyaccountComponent} from './myaccount/myaccount.component';
import {OrderhistoryComponent} from './orderhistory/orderhistory.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import {EditproductComponent} from './editproduct/editproduct.component';

export const MAIN_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'logout' , component: LogoutComponent, canActivate: [AuthGuardService]},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuardService]},
  {path: 'productdetail/:id', component: ProductdetailComponent},
  {path: 'productlist/:category' , component: ProductlistComponent},
  {path: 'productlist', component: ProductlistComponent},
  {path: 'myaccount' , component: MyaccountComponent, canActivate: [AuthGuardService]},
  {path: 'orderHistory' , component: OrderhistoryComponent, canActivate: [AuthGuardService]},
  { path: 'addproduct', component: AddproductComponent, canActivate: [AuthGuardService]},
  { path: 'editproduct/:id', component: EditproductComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'home'}
];
