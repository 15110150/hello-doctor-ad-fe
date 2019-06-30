import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExcelService } from '../../services/sharedServices/excel.service';
import { NgxEditorModule } from 'ngx-editor';

import { ListBookingComponent } from './list-booking/list-booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MatTabsModule,
      BookingRoutingModule,
      NgMultiSelectDropDownModule,
      NgxEditorModule,
      NgbModule,
      NgxPaginationModule
    ],
    declarations: [
        ListBookingComponent,
    ],
    providers: [ 
        ExcelService,
        DatePipe ]
  })
export class BookingModule {}
