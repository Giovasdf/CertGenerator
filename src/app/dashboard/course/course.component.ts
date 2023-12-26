import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  courses:any;

  constructor(private courseService:CourseService){

  }


  ngOnInit(){
    this.getCourses();
  }

  addCourse(){}
  async getCourses(){
    this.courses = await this.courseService.getAllCourses();
  }
  deleteCourse(arg0: any) {
    throw new Error('Method not implemented.');
  }
  editCourse(_t14: any) {
    throw new Error('Method not implemented.');
  }
}
