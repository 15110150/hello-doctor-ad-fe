import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListDoctorComponent } from './list-doctor/list-doctor.component';

import { ListDoctorRoutingModule } from './doctor-routing.module';
import { ExcelService } from '../../services/sharedServices/excel.service';
import { NgxEditorModule } from 'ngx-editor';
import { ListWaitingComponent } from './list-waiting/list-waiting.component';
import { DetailDoctorComponent } from './detail-doctor/detail-doctor.component';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MatTabsModule,
      ListDoctorRoutingModule,
      NgMultiSelectDropDownModule,
      NgxEditorModule,
      NgbModule
    ],
    declarations: [
        ListDoctorComponent,
        ListWaitingComponent,
        DetailDoctorComponent,
    ],
    providers: [ ExcelService ]
  })
export class ListDoctorModule {}
