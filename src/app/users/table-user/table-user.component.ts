import { Component, Input, OnInit } from "@angular/core";
import { Students } from '../models/students.interface';

@Component({
  selector: 'app-table-user', 
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUSerComponent implements OnInit {
  
  @Input() inpColor: string ="";
  @Input() inpStudents: any;

  constructor() {}

  ngOnInit(): void {}

  getwidth(bar: number) {
    if (bar>7){
      var bg:string='#10B981';
    }else{
      var bg:string='#EF4444';
    }
        return { 'width': bar*10 + '%', 'background-color': bg};
  }
}
