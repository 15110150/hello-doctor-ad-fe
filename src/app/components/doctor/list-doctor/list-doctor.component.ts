import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model/page';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { ExcelService } from 'src/app/services/sharedServices/excel.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {

  currentPage = 0;
  listPage: Array<number>;
  page: Page<Doctor>;
  sortBy = 'name';
  size = 20;
  listDoctor: Doctor[];
  config;
  keyword = '';

  constructor(private doctorService: DoctorService, private excelService: ExcelService) { }

  ngOnInit() {
    this.getListDoctor('ASC', this.keyword, 0, this.size, this.sortBy);
  }

  getListDoctor(direction: string, keyword: string, page: number, size: number, sortBy: string) {
    this.currentPage = page;
    return this.doctorService.getListDoctor(direction, keyword, page, size, sortBy)
      .subscribe(pages => {
        this.doctorService.getListDoctor(direction, keyword, page, pages.total, sortBy)
          .subscribe(result => {
            this.listDoctor = result.content;
            this.config = {
              itemsPerPage: 20,
              currentPage: 1,
              totalItems: this.listDoctor.length
            };
          })
      });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  findDoctor(keyword) {
    this.getListDoctor('ASC', keyword, 0, this.size, this.sortBy)
  }

  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.listDoctor, 'Danh sách bác sĩ');
  }
}
