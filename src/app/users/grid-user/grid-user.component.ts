import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-user',
  templateUrl: './grid-user.component.html',
  styleUrls: ['./grid-user.component.css']
})
export class GridUserComponent implements OnInit {

  @Input() inpColor: string ="";
  @Input() inpStudents: any;

  constructor() { }

  ngOnInit(): void {
  }

  getBg(bar: number) {
    if (bar>7){
      var bg:string='#10B981';
    }else{
      var bg:string='#EF4444';
    }
        return {'background-color': bg};
  }
}
