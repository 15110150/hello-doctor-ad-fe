import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tài khoản'
    },
    children: [
      {
        path: '',
        data: {
          title: ''
        },
        children: [
          {
            path: 'account',
            loadChildren: './account/account.module#AccountModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    data: {
      title: 'Thống kê'
    },
    children: [
      {
        path: '',
        data: {
          title: 'Tổng quan'
        },
        children: [
          {
            path: 'statistical',
            loadChildren: './statistical/statistical.module#StatisticalModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    data: {
      title: 'Quản lí bác sĩ'
    },
    children: [
      {
        path: '',
        data: {
          title: 'Danh sách'
        },
        children: [
          {
            path: 'doctor',
            loadChildren: './doctor/doctor.module#ListDoctorModule'
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
