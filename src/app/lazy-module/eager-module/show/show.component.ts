import { Component, OnInit } from '@angular/core';
import { TestService } from 'app/lazy-module/test.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(public testService: TestService) { }

  ngOnInit() {
     alert(this.testService.getNumber())
  }

}
