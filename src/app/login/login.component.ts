import { Component } from '@angular/core';
import { AccountManagementService } from '../services/account-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private accountManagement:AccountManagementService){

  }

  login(){
    this.accountManagement.login(this.username, this.password)
  }


}
