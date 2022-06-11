import { Component, OnInit } from '@angular/core';
import { Students } from './models/students.interface'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  students: Students[] = [
    {id: 1, name: "Leanne Graham", mail: "Sincere@april.biz", fechaNac: '12/03/1999', telefono: 23456000, notas:8 },
    {id: 2, name: "Ervin Howell", mail: "Shanna@melissa.tv", fechaNac: '10/11/1981', telefono: 23456000, notas:5.25 },
    {id: 3, name: "Clementine Bauch", mail: "Nathan@yesenia.net", fechaNac: '03/04/1981', telefono: 23456000, notas:9 },
    {id: 4, name: "Patricia Lebsack", mail: "Julianne.OConner@kory.org", fechaNac: '08/23/1976', telefono: 23456000, notas:9.5 },
    {id: 5, name: "Chelsey Dietrich", mail: "Lucio_Hettinger@annie.ca", fechaNac: '03/03/1993', telefono: 23456000, notas:10 },
    {id: 6, name: "Kurtis Weissnat", mail: "Telly.Hoeger@billy.biz", fechaNac: '11/03/2000', telefono: 23456000, notas:6.5 },
  ]

  public color='dark';
  public verDiv: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  colorButton(color: string) {
    //console.log (color)
    color == "light" ? this.color ="dark" : this.color ="light";
    //console.log (this.color)
  }
}
