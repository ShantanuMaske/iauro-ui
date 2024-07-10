import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoRoutingModule } from './student-info-routing.module';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StudentFormComponent],
  imports: [
    CommonModule,
    StudentInfoRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class StudentInfoModule {}
