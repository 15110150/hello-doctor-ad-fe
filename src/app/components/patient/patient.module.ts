import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListPatientComponent } from './list-patient/list-patient.component';

import { PatientRoutingModule } from './patient-routing.module';
import { ExcelService } from '../../services/sharedServices/excel.service';
import { NgxEditorModule } from 'ngx-editor';
import { NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MatTabsModule,
      PatientRoutingModule,
      NgMultiSelectDropDownModule,
      NgxEditorModule,
      NgbModule,
      NgxPaginationModule,
      AngularFontAwesomeModule
    ],
    declarations: [
        ListPatientComponent
    ],
    providers: [ ExcelService ]
  })
export class PatientModule {}
