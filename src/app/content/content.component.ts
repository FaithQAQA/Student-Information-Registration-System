import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() Campus!: string[]; 
  @Input () Departments!: string [];
  username: string = ''; 
  enteredCampus: string = ''; 
  enteredDepartment: string = ''; 

  isUsernameEmpty(): boolean {
    return this.username.trim() === '';
  }
  age!: number;

  isAgeLessThan20(): boolean {
    return this.age !== null && this.age < 20;
  }

  isInvalidAge(): boolean {
    return this.age === null || this.age <= 0;
  }

  isEnteredCampusInvalid(): boolean {
    return this.enteredCampus.trim() === '' || !this.Campus.includes(this.enteredCampus);
  }
  isEnteredDepartmentInvalid(): boolean
  {
    return this.enteredDepartment.trim() === '' || !this.Departments.includes(this.enteredDepartment);
  }
  CheckForm() { 
    if(this.age >20 || this.age===20 && this.username !=null && this.enteredCampus!=null && this.enteredDepartment!=null)
    {
      localStorage.setItem("Username",this.username);
      localStorage.setItem("Campus",this.enteredCampus);
      localStorage.setItem("Department",this.enteredDepartment);
      localStorage.setItem("Age",this.age.toString());
    }
 
  }
  }
