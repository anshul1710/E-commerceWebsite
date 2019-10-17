import { Component, OnInit } from '@angular/core';
import {User, UserServiceService} from '../user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  user: User;
  private name;
  private role;
  private email;
  constructor(private registrationService: UserServiceService, private router: Router) { }
  ngOnInit() {
    this.registrationService.getUser().subscribe( data => {
      console.log(data);
      this.user = data;
      this.email = this.user.email;
      this.name = this.user.name;
      this.role = this.user.role;
      console.log(this.user);
    });
  }

  editUser() {
      this.registrationService.editMyUser(this.user).subscribe(data => {
      this.user = data;
      console.log(data);
      alert('Details updated successfully.');
      this.router.navigate(['logout']);
    });
  }
}
