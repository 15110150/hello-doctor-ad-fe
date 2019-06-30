import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListBookingComponent } from './list-booking/list-booking.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/list', pathMatch: 'full'
    },
    {
        path: 'list',
        component: ListBookingComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule { }
