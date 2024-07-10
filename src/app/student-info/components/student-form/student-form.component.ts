import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { StudentService } from '../../services/student.service';

import { IDepartment } from 'src/app/shared/interfaces/department.interface';
import { IStudentInfo } from 'src/app/shared/interfaces/student.interface';
import { EMAIL_REGEX, PHONE_NUMBER } from 'src/app/shared/constants/constant';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  departments: IDepartment[] = [
    { value: 'CSE' },
    { value: 'CIVIL' },
    { value: 'Mechanical' },
  ];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'departmentName',
    'email',
    'mobileNumber',
    'gender',
    'action',
  ];
  studentData: IStudentInfo[] = [];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getStudentData();
    this.createForm();
  }

  createForm(): void {
    this.studentForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      departmentName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern(PHONE_NUMBER)],
      ],
      gender: ['Male', Validators.required],
    });
  }

  onSubmit(formDirective: FormGroupDirective): void {
    if (this.studentForm.valid) {
      const formData = this.studentForm.value;
      const existingStudent = this.studentService.getStudentById(formData?.id);
      if (existingStudent) {
        this.updateStudent(existingStudent, formData);
      } else {
        this.addStudent(formData);
      }

      formDirective.resetForm();
      this.studentForm.reset();
    }
  }

  updateStudent(existingStudent: IStudentInfo, formData: IStudentInfo): void {
    existingStudent.firstName = formData.firstName;
    existingStudent.lastName = formData.lastName;
    this.studentService.updateStudent(existingStudent);
    this.getStudentData();
  }

  addStudent(formData: any): void {
    this.studentService.addStudent(formData);
    this.getStudentData();
  }

  resetForm(): void {
    this.studentForm.reset();
    this.studentForm.markAsPristine();
  }

  getStudentData(): void {
    this.studentData = this.studentService.getstudents() || [];
    this.dataSource = new MatTableDataSource(this.studentData);
    this.dataSource.sort = this.sort;
  }

  editStudent(index: number): void {
    const student = this.studentService.getstudent(index - 1);
    this.studentForm.patchValue(student);
    this.getStudentData();
  }

  deleteStudent(index: number): void {
    this.studentService.deletestudent(index - 1);
    this.getStudentData();
  }
}
