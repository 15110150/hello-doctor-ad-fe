import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-doctor',
  templateUrl: './detail-doctor.component.html',
  styleUrls: ['./detail-doctor.component.css']
})
export class DetailDoctorComponent implements OnInit {

  doctorId;
  doctor: Doctor;
  isRead = true;
  pre: string;

  constructor(private doctorService: DoctorService, private activatedRoute: ActivatedRoute,
    private _location: Location) { 
    if (this.activatedRoute.snapshot.params['id']) {
      this.doctorId = this.activatedRoute.snapshot.params['id'];
    }
    if (this.activatedRoute.snapshot.params['r']) {
      this.pre = this.activatedRoute.snapshot.params['r'];
    }
  }

  ngOnInit() {
    this.doctor = new Doctor();
    this.getDoctor();
    if(this.pre.includes('wait')){
      this.isRead = false;
    }
    else{
      this.isRead = true;
    }
  }

  getDoctor(){
   this.doctorService.getDoctor(this.doctorId)
   .subscribe(result =>{
     this.doctor = result;
   })
  }

  backClicked(){
    this._location.back();
  }

  acceptDoctor(doctor: Doctor){
    doctor.status = "NORMAL";
    this.doctorService.updateDoctor(doctor)
    .subscribe(result => {
      alert("Đã chấp nhận hồ sơ")
      this.backClicked();
    },
    error => {
      alert("Lỗi, vui lòng thử lại sau");
    })
  }

  refuseDoctor(doctor: Doctor){
    doctor.status = "REJECT";
    this.doctorService.updateDoctor(doctor)
    .subscribe(result => {
      alert("Đã chấp nhận hồ sơ")
      this.backClicked();
    },
    error => {
      alert("Lỗi, vui lòng thử lại sau");
    })
  }
}
