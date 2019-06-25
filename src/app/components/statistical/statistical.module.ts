import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ListStatisticalComponent } from './list-statistical/list-statistical.component';

import { StatisticalRoutingModule } from './statistical-routing.module';
import { ClassStatisticalComponent } from './class-statistical/class-statistical.component';
import { StudentStatisticalComponent } from './student-statistical/student-statistical.component';
import { CourseStatisticalComponent } from './course-statistical/course-statistical.component';

@NgModule({
    imports: [
      CommonModule,
      StatisticalRoutingModule,
      FormsModule,
      NgbModule,
      NgMultiSelectDropDownModule
    ],
    declarations: [
        ListStatisticalComponent,
        ClassStatisticalComponent,
        StudentStatisticalComponent,
        CourseStatisticalComponent
    ]
  })
export class StatisticalModule {}