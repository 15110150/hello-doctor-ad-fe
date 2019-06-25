import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ListUseraccountComponent } from './list-useraccount/list-useraccount.component';

import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MatTabsModule,
      AccountRoutingModule,
      NgMultiSelectDropDownModule
    ],
    declarations: [
        ListUseraccountComponent
    ]
  })
export class AccountModule {}