import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  ProfileMenu: any = [
    {
      name: 'History',
      icon: 'grid',
      url: 'dashboard',
      iconsrc: 'https://cdn.lordicon.com/vuiggmtc.json',
      hovered: 'https://cdn.lordicon.com/dafdkyyt.json',
      color: 'primary:#b4b4b4'
    },
    {
      name: 'Upgrade to Pro',
      icon: 'grid',
      url: 'dashboard',
      iconsrc: 'https://cdn.lordicon.com/vyqvtrtg.json',
      hovered: 'https://cdn.lordicon.com/sbrtyqxj.json',
      color: 'primary:#e8e230'
    },
  ]

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  openMessage() {
    this.route.navigate(['message'])
  }

}
