import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private loginService: AuthenticationService, private registrationService: UserServiceService) { }
private user;
  private role;
  ngOnInit() {
    this.registrationService.getUser().subscribe( data => {
      this.user = data;
      this.role = this.user.role;
    });
  }
  sendParameter(e) {

  }
}
