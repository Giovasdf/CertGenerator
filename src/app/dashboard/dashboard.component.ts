import { Component, OnInit } from '@angular/core';
import { AccountManagementService } from '../services/account-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  id:any;
  constructor(private acti: ActivatedRoute, router: Router,private accountService: AccountManagementService) {
    this.acti.paramMap.subscribe(params=>{

      this.id=params.get('id');

      if(this.id>environment.menuId)
      {
        router.navigate(['**']);
      }

    })
  }


  ngOnInit(): void {
    this.accountService.checkAuthentication();
  }

  logout() {
    this.accountService.logout();
  }
}
