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

      return authData;
    } catch (error) {
      // Handle error, show a message, etc.
      return error;
    }
  }
}
