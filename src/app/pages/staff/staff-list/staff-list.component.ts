import { AfterViewInit, OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phoneNo', 'status','createDate','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  userList: any = [
    {
      name: "John Doe",
      role: "Software Engineer",
      department: "Engineering",
      email: "john.doe@example.com",
      phoneNo: "123-456-7890",
      createDate: "2023-01-01",
      dob: "1990-05-15",
      hireDate: "2022-05-01",
      status: "Active",
      gender: "Male",
      wagesType: "Salary",
      wages: 80000,
      workExp: 5,
      address: "123 Main St, Cityville"
    },
    {
      name: "Jane Smith",
      role: "Marketing Specialist",
      department: "Marketing",
      email: "jane.smith@example.com",
      phoneNo: "987-654-3210",
      createDate: "2023-01-05",
      dob: "1985-08-20",
      hireDate: "2021-03-10",
      status: "Active",
      gender: "Female",
      wagesType: "Hourly",
      wages: 25,
      workExp: 8,
      address: "456 Oak St, Townsville"
    },
    {
      name: "Bob Johnson",
      role: "Sales Representative",
      department: "Sales",
      email: "bob.johnson@example.com",
      phoneNo: "555-123-4567",
      createDate: "2023-02-10",
      dob: "1982-11-12",
      hireDate: "2020-09-15",
      status: "Active",
      gender: "Male",
      wagesType: "Commission",
      wages: 0.1,
      workExp: 10,
      address: "789 Pine St, Villagetown"
    },

    {
      name: "John Doe",
      role: "Software Engineer",
      department: "Engineering",
      email: "john.doe@example.com",
      phoneNo: "123-456-7890",
      createDate: "2023-01-01",
      dob: "1990-05-15",
      hireDate: "2022-05-01",
      status: "Active",
      gender: "Male",
      wagesType: "Salary",
      wages: 80000,
      workExp: 5,
      address: "123 Main St, Cityville"
    },
    {
      name: "Jane Smith",
      role: "Marketing Specialist",
      department: "Marketing",
      email: "jane.smith@example.com",
      phoneNo: "987-654-3210",
      createDate: "2023-01-05",
      dob: "1985-08-20",
      hireDate: "2021-03-10",
      status: "Active",
      gender: "Female",
      wagesType: "Hourly",
      wages: 25,
      workExp: 8,
      address: "456 Oak St, Townsville"
    },
    {
      name: "Bob Johnson",
      role: "Sales Representative",
      department: "Sales",
      email: "bob.johnson@example.com",
      phoneNo: "555-123-4567",
      createDate: "2023-02-10",
      dob: "1982-11-12",
      hireDate: "2020-09-15",
      status: "Active",
      gender: "Male",
      wagesType: "Commission",
      wages: 0.1,
      workExp: 10,
      address: "789 Pine St, Villagetown"
    },

    {
      name: "John Doe",
      role: "Software Engineer",
      department: "Engineering",
      email: "john.doe@example.com",
      phoneNo: "123-456-7890",
      createDate: "2023-01-01",
      dob: "1990-05-15",
      hireDate: "2022-05-01",
      status: "Active",
      gender: "Male",
      wagesType: "Salary",
      wages: 80000,
      workExp: 5,
      address: "123 Main St, Cityville"
    },
    {
      name: "Jane Smith",
      role: "Marketing Specialist",
      department: "Marketing",
      email: "jane.smith@example.com",
      phoneNo: "987-654-3210",
      createDate: "2023-01-05",
      dob: "1985-08-20",
      hireDate: "2021-03-10",
      status: "Active",
      gender: "Female",
      wagesType: "Hourly",
      wages: 25,
      workExp: 8,
      address: "456 Oak St, Townsville"
    },
    {
      name: "Bob Johnson",
      role: "Sales Representative",
      department: "Sales",
      email: "bob.johnson@example.com",
      phoneNo: "555-123-4567",
      createDate: "2023-02-10",
      dob: "1982-11-12",
      hireDate: "2020-09-15",
      status: "Active",
      gender: "Male",
      wagesType: "Commission",
      wages: 0.1,
      workExp: 10,
      address: "789 Pine St, Villagetown"
    },

    {
      name: "John Doe",
      role: "Software Engineer",
      department: "Engineering",
      email: "john.doe@example.com",
      phoneNo: "123-456-7890",
      createDate: "2023-01-01",
      dob: "1990-05-15",
      hireDate: "2022-05-01",
      status: "Active",
      gender: "Male",
      wagesType: "Salary",
      wages: 80000,
      workExp: 5,
      address: "123 Main St, Cityville"
    },
    {
      name: "Jane Smith",
      role: "Marketing Specialist",
      department: "Marketing",
      email: "jane.smith@example.com",
      phoneNo: "987-654-3210",
      createDate: "2023-01-05",
      dob: "1985-08-20",
      hireDate: "2021-03-10",
      status: "Active",
      gender: "Female",
      wagesType: "Hourly",
      wages: 25,
      workExp: 8,
      address: "456 Oak St, Townsville"
    },
    {
      name: "Bob Johnson",
      role: "Sales Representative",
      department: "Sales",
      email: "bob.johnson@example.com",
      phoneNo: "555-123-4567",
      createDate: "2023-02-10",
      dob: "1982-11-12",
      hireDate: "2020-09-15",
      status: "Active",
      gender: "Male",
      wagesType: "Commission",
      wages: 0.1,
      workExp: 10,
      address: "789 Pine St, Villagetown"
    },

  ];


  constructor() {
    this.dataSource = new MatTableDataSource(this.userList);
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
