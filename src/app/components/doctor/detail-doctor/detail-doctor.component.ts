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

  constructor(private doctorService: DoctorService, private activatedRoute: ActivatedRoute,
    private _location: Location) { 
    if (this.activatedRoute.snapshot.params['id']) {
      this.doctorId = this.activatedRoute.snapshot.params['id'];
    }
  }

  ngOnInit() {
    this.doctor = new Doctor();
    this.getDoctor();
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
}
