import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

  div1BgColor : string = 'bg-primary';

  isDiv2Active : boolean = false;

  num1 : string = '';
  num2 : string = '';

  addRedColor(){
    this.div1BgColor = 'bg-danger';
  }

  addBlueColor(){
    this.div1BgColor = 'bg-primary';
  }

  changeColor(){
    if(this.isDiv2Active == true){
      this.isDiv2Active = false;
    }else{
      this.isDiv2Active = true;
    }
  }

  status : boolean = false;

  studentList : any[] = [
    { id : 1, name : 'rajeev', gender : 'male', state : 'UttarPradesh', status : false, marks : 92},
    { id : 2, name : 'disha',  gender : 'female', state : 'Karnataka', status : false, marks : 95},
    { id : 3, name : 'snehal', gender : 'female', state : 'Maharashtra', status : true, marks : 78},
    { id : 4, name : 'akshay', gender : 'male', state : 'Maharashtra', status : false, marks : 35},
    { id : 5, name : 'dinesh', gender : 'male', state : 'West Bengal', status : true, marks : 10},
  ]

  customStyle : any = {
    'color' : 'white',
    'background-color' : 'red',
    'width' : '200px',
    'height' : '200px',
    'border-radius' : '50%'
  }
}
