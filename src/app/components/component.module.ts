import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentRoutingModule } from './component.routing';
import { BsDropdownModule, PaginationModule, PopoverModule, ProgressbarModule, TabsModule, TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [],
  entryComponents: [],
})
export class ComponentModule {

}
