import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './components/student-form/student-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'student-info', pathMatch: 'full' },
  { path: 'student-info', component: StudentFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentInfoRoutingModule {}
