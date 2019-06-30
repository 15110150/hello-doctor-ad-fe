import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient/patient.service';
import { Patient } from 'src/app/model/patient';
import { ExcelService } from 'src/app/services/sharedServices/excel.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  listPatient: Patient[];
  keyword = '';
  config;
  constructor(private patientService: PatientService, private excelService: ExcelService) { }

  ngOnInit() {
    this.getListPatient();
  }

  getListPatient(){
    this.patientService.getListPatient(this.keyword)
    .subscribe(result =>{
      this.listPatient = result.content;
      this.config = {
        itemsPerPage: 20,
        currentPage: 1,
        totalItems: this.listPatient.length
      };
      console.log(this.listPatient);
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.listPatient, 'Danh sách bệnh nhân');
  }
}
