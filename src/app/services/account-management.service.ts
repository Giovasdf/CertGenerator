import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import PocketBase from 'pocketbase';
@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {


  pb: PocketBase;

  constructor(private router: Router) {
    this.pb = new PocketBase('http://127.0.0.1:8090/');
  }

  async login(username:string, password:string) {
    try {
      const authData = await this.pb.collection('users').authWithPassword(username, password);

      // Access auth data from the authStore
      console.log(this.pb.authStore);

      // Optionally, navigate to another page after successful login
      this.router.navigate(['/dashboard/1']);
    } catch (error) {
      console.error('Login failed', error);
      // Handle error, show a message, etc.
    }
  }

  logout() {
    // "logout" the last authenticated model
    this.pb.authStore.clear();

    // Optionally, navigate to the login page after logout
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.pb.authStore.isValid;
  }

  // Método para verificar el estado de autenticación y redirigir a la página de inicio de sesión si es necesario
  checkAuthentication(): void {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

}
