import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openSideNav: boolean = true;
  title = 'management_website';
  constructor(public route: Router) {
    if(window.innerWidth == 360){
      this.openSideNav = false;
    }

  }

  Sidemenu: any = [
    {
      name: 'Dashboard',
      icon: 'grid',
      url: 'dashboard',
      iconsrc: 'https://cdn.lordicon.com/whrxobsb.json',
      selected: 'https://cdn.lordicon.com/uwinmnkh.json',
      active: true,
    },
    {
      name: 'Users',
      icon: 'people',
      url: 'stafflist',
      iconsrc: 'https://cdn.lordicon.com/kthelypq.json',
      selected: 'https://cdn.lordicon.com/hrjifpbq.json',
      active: false,
    },
    {
      name: 'Tasks',
      icon: 'clipboard',
      url: 'task',
      iconsrc: 'https://cdn.lordicon.com/vdjwmfqs.json',
      selected: 'https://cdn.lordicon.com/xljvqlng.json',
      active: false,
    },
    {
      name: 'Calendar',
      icon: 'calendar',
      url: 'calendar',
      iconsrc: 'https://cdn.lordicon.com/abfverha.json',
      selected: 'https://cdn.lordicon.com/wmlleaaf.json',
      active: false,
    },
    {
      name: 'Schedule',
      icon: 'calendar',
      url: 'schedule',
      iconsrc: 'https://cdn.lordicon.com/ppyvfomi.json',
      selected: 'https://cdn.lordicon.com/lxrsqlrx.json',
      active: false,
    },
  ]

  opnePage(item: any) {
    this.route.navigate(['item.url'])
  }

}


// {
//   hname: 'Cliant', sname: 'All about cliant',
//   two: [
//     {
//       name: 'Cliant creation', icon: 'person-add-outline', url: '/client',
//       // three: [
//       //   {name: 'sub Menu 1', icon: '',  url: '', },
//       // ]
//     },
//     {
//       name: 'Order creation', icon: 'clipboard-outline', url: '/order',
//     },
//     // {
//     //   name: 'Product type', icon: 'nuclear-outline', url: '/producttype',
//     // },

//     {
//       name: 'View stl', icon: 'person-add-outline', url: '/stlobj',
//     }
//   ]
// },
