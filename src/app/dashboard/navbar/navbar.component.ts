import { Component, Input } from '@angular/core';
import { AccountManagementService } from 'src/app/services/account-management.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() username: string = "";

  constructor(private accountService: AccountManagementService) {}

  logout(): void {
    this.accountService.logout();
  }


}
