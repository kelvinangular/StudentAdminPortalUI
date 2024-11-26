import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models/ui-models/student.model';
import { StudentService } from './student.service';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatPaginator],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth'];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>()
  
  constructor(private studentService: StudentService) {}
  
  ngOnInit(): void {
    // Fetch the students
    this.studentService.getStudent()
    .subscribe({
            next: (successResponse) => {
              this.students = successResponse;
              this.dataSource = new MatTableDataSource<Student>(this.students);
              
            },
            error: (errorResponse) => {console.log(errorResponse)}
          });
    }
}
