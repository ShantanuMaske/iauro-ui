import { Injectable } from '@angular/core';
import { DUMMY_DATA } from 'src/app/shared/constants/constant';
import { IStudentInfo } from 'src/app/shared/interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: IStudentInfo[] = [DUMMY_DATA];
  constructor() {}

  getStudentById(id: number): IStudentInfo | undefined {
    return this.students.find((student) => student.id === id);
  }

  updateStudent(updatedStudent: IStudentInfo): void {
    const index = this.students.findIndex(
      (student) => student.id === updatedStudent.id
    );
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  addStudent(student: IStudentInfo): void {
    student.id = this.students.length + 1;
    this.students.push(student);
  }

  getstudents(): IStudentInfo[] {
    return this.students;
  }

  getstudent(index: number): any {
    return this.students[index];
  }

  deletestudent(index: number): void {
    this.students.splice(index, 1);
  }
}
