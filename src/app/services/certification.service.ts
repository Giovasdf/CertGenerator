import  PocketBase  from 'pocketbase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  pb: PocketBase;

  constructor(private router:Router) {
    this.pb = new PocketBase('http://127.0.0.1:8090/');
  }

  async getAllCertifications(){
    try {
      const record = await this.pb.collection('certifications').getFullList(
        { expand: "user,course" }
      );
      console.log(record)
      return record;

    } catch (error) {
      // Handle error, show a message, etc.
      return error;
    }
  }


  async verifyValidCertificate(id:any){
    try{
      const record = await this.pb.collection('certifications').getOne(id, {
        expand: 'user,course',
    });

    if(record != null){
      return record;
    }
    else{
      return "Not Valid Certificate"
    }
    }catch(error){
      return error;
    }
  }
}
