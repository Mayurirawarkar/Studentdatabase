import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
 

  constructor(private s1:StudentService) { }

  ngOnInit(): void {
  }
insertdata(studentform: { value: any; })
{
  this.s1.insertform1(studentform.value).subscribe();
}
}
