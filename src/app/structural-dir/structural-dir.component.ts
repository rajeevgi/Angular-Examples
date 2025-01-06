import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1visible : boolean = false;
  isDiv2visible : boolean = true;

  showHideDiv1(){
    this.isDiv1visible = true;
  }

  hideDiv1(){
    this.isDiv1visible = false;
  }

  toggleDiv2(){
    if(this.isDiv2visible == true){
      this.isDiv2visible = false;
    }else{
      this.isDiv2visible = true;
    }
  }

  num1 : string = ''
  num2 : string = ''

  isActive : boolean = false;
  selectedState : string = '';

  showState(){
    if(this.selectedState == 'Maharashtra'){
      this.selectedState = "Maharashtra Selected";
    }else if(this.selectedState == 'Delhi'){
      this.selectedState = "Delhi Selected";
    }else if(this.selectedState == 'UttarPradesh'){
      this.selectedState = "UttarPradesh Selected";
    }else if(this.selectedState == 'Gujarat'){
      this.selectedState = "Gujarat Selected";
    }else{
      this.selectedState = "invalid Input!";
    }
  }

  cityArray : string[] = ['Mumbai','Pune','Banglore','Chennai'];

  studentList : any[] = [
    { id : 1, name : 'rajeev', state: 'maharashtra', isActive : false},
    { id : 2, name : 'disha', state: 'karnataka', isActive : false},
    { id : 3, name : 'dinesh', state: 'West Bengal', isActive : true},
    { id : 4, name : 'akshay', state: 'maharashtra', isActive : true},
    { id : 5, name : 'asad', state: 'hyderbad', isActive : false},
  ]
}
