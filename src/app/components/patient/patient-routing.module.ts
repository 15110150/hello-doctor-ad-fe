import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListPatientComponent } from './list-patient/list-patient.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/list', pathMatch: 'full'
    },
    {
        path: 'list',
        component: ListPatientComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientRoutingModule { }
