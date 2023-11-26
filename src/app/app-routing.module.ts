import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'message', loadChildren: () => import('./pages/messageing/message/message.module').then(m => m.MessageModule) },
  { path: 'stafflist', loadChildren: () => import('./pages/staff/staff-list/staff-list.module').then(m => m.StaffListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
