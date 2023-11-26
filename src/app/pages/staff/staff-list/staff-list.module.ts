import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffListRoutingModule } from './staff-list-routing.module';
import { StaffListComponent } from './staff-list.component';
import { StaffDetailComponent } from '../staff-detail/staff-detail.component';
import { StaffCreationComponent } from '../staff-creation/staff-creation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    StaffListComponent,
    StaffDetailComponent,
    StaffCreationComponent
  ],
  imports: [
    CommonModule,
    StaffListRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StaffListModule { }
