import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
  users:any;
  constructor(public userServive:UserService){

  }

  ngOnInit(): void {
      this.getUsers();
  }

  async getUsers(){
    this.users = await this.userServive.getUsers();
  }

  editUser(user:any){

  }

  deleteUser(userId:any){

  }

  addUser(){

  }



}
