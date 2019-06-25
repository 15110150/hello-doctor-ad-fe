import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListStatisticalComponent } from './list-statistical/list-statistical.component';
import { ClassStatisticalComponent } from './class-statistical/class-statistical.component';
import { StudentStatisticalComponent } from './student-statistical/student-statistical.component';
import { CourseStatisticalComponent } from './course-statistical/course-statistical.component';

const routes: Routes = [
{ path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListStatisticalComponent
  },
  {
    path: 'class',
    component: ClassStatisticalComponent
  },
  {
    path: 'student',
    component: StudentStatisticalComponent
  },
  {
    path: 'course',
    component: CourseStatisticalComponent
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class StatisticalRoutingModule {}