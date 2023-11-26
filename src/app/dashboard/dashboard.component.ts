import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentTime: any = new Date();
  
  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);

  }

}
