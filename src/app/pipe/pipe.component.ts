import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-pipe',
  imports: [DatePipe,UpperCasePipe, LowerCasePipe, TitleCasePipe, JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName : string = "this is The Demo session";

  currentDate : Date = new Date();

  student : any = {
    name : 'rajeev',
    age : 25,
    city : 'Navi-mumbai'
  }

  // currentTime : Date = new Date();

  // constructor(){
  //   this.currentTime = interval(1000).pipe(map(() => new Date()));
  // }
}
