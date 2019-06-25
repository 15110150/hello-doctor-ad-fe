import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListUseraccountComponent } from './list-useraccount/list-useraccount.component';

const routes: Routes = [
{ path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListUseraccountComponent
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AccountRoutingModule {}