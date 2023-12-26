import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  pb: PocketBase;
  collectionName = 'users';

  constructor(private router:Router) {

    this.pb = new PocketBase('http://127.0.0.1:8090/');
  }

  async getUsers(){
    try {
      const authData = await this.pb.collection('users').getFullList();
      console.log(authData)
      return authData;
    } catch (error) {
      // Handle error, show a message, etc.
      return error;
    }
  }

  async createUser(data:any){
   const record = await this.pb.collection('users').create(data);
   this.router.navigate(['/dashboard/1']);
  }

  async deleteUser(id:any){
    console.log(id)
    await this.pb.collection('users').delete('id');
  }

  async updateUser(data:any){
  //   const data = {
  //     "username": "test_username_update",
  //     "emailVisibility": false,
  //     "password": "87654321",
  //     "passwordConfirm": "87654321",
  //     "oldPassword": "12345678",
  //     "name": "test"
  // };

  const record = await this.pb.collection('users').update(data.id, data);
  }
}
