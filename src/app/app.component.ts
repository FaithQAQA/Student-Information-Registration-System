import { Component } from '@angular/core';
import { MyInfo } from './Classes/Myinfo';
import { SelfInfo } from './Classes/SelfInfo';
import { Campus } from './Classes/campuses';
import { Departments } from './Classes/Departments';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3';
  campusData!: Campus;
  DepartmentsData!:  Departments;
  myinfoDisplay:MyInfo =
  {
    fullName: 'Jalani Maynard',
    homeCountry: 'Canada'
  }
  SelfInfo: SelfInfo =
  {
    emailAddress: 'Jalani.Maynard@gmail.com',
    collegeName: 'Sheridan',
    campus: 'Davis'
  }
  campuses: string[] = ['Davis', 'Hazel McCallion', 'Trafalgar']; 
  departments: string[] = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Biology', 'Physics', 'Chemistry'];

 
}
