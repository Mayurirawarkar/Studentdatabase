import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private s2:StudentService) { }

  ngOnInit(): void {
  }
updatedata(updateform: any)
{
  this.s2.updaterecord(updateform.value).subscribe();
}
}
