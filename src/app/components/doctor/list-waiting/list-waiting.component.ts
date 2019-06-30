import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model/page';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-list-waiting',
  templateUrl: './list-waiting.component.html',
  styleUrls: ['./list-waiting.component.css']
})
export class ListWaitingComponent implements OnInit {

  currentPage = 0;
  listPage: Array<number>;
  page: Page<Doctor>;
  sortBy = 'name';
  size = 20;
  listDoctor: Doctor[];
  config;
  keyword = '';

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.getListDoctor('ASC', this.keyword, 0, this.size, this.sortBy);
  }

  getListDoctor(direction: string, keyword: string, page: number, size: number, sortBy: string) {
    this.currentPage = page;
    return this.doctorService.getListDoctorWaiting(direction, keyword, page, size, sortBy)
      .subscribe(pages => {
        this.doctorService.getListDoctorWaiting(direction, keyword, page, pages.total, sortBy)
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

  findDoctor(keyword){
    this.getListDoctor('ASC', keyword, 0, this.size, this.sortBy);
  }

}
