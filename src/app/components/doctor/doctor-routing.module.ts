import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { ListWaitingComponent } from './list-waiting/list-waiting.component';
import { DetailDoctorComponent } from './detail-doctor/detail-doctor.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/list', pathMatch: 'full'
    },
    {
        path: 'list',
        component: ListDoctorComponent
    },
    {
        path: 'list-waiting',
        component: ListWaitingComponent
    },
    {
        path: 'detail-doctor/:r/:id',
        component: DetailDoctorComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDoctorRoutingModule { }
