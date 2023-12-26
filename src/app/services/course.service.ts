import PocketBase from 'pocketbase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  pb: PocketBase;

  constructor(private router:Router) {
    this.pb = new PocketBase('http://127.0.0.1:8090/');
  }

  async getAllCourses(){

    try {
      const record = await this.pb.collection('courses').getFullList();
      console.log(record)
      return record;

    } catch (error) {
      // Handle error, show a message, etc.
      return error;
    }

  }

  async createCourse(data:any){
    const record = await this.pb.collection('courses').create(data);
    this.router.navigate(['dashboard/1']);
  }

  async updateCourse(data:any){
    const record = await this.pb.collection('courses').update(data.id, data);
  }

  async deleteCourse(id:any){
    await this.pb.collection('courses').delete(id);
    this.router.navigate(['dashboard/1']);

  }


}
