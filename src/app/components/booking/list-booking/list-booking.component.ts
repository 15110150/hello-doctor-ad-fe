import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking/booking.service';
import { Router, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ListBooking } from 'src/app/model/list-booking';
import { Status } from 'src/app/model/status';
import { StatusVI } from 'src/app/model/statusVI';
import { ExcelService } from 'src/app/services/sharedServices/excel.service';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  listBooking: ListBooking[];
  config;
  listStatusSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    itemsShowLimit: 1,
    allowSearchFilter: true
  };
  status = [{ item_id: 0, item_text: 'Tất cả' }];
  listStatus = [
    { item_id: 0, item_text: 'Tất cả' },
    { item_id: 1, item_text: StatusVI.ACCEPTED },
    { item_id: 2, item_text: StatusVI.WAITING },
    { item_id: 3, item_text: StatusVI.DOCTOR_CANCEL },
    { item_id: 4, item_text: StatusVI.PATIENT_CANCEL },
    { item_id: 5, item_text: StatusVI.FINISHED },
    { item_id: 6, item_text: StatusVI.EXPIRED }
  ];
  keyword = '';

  navigationSubscription;
  constructor(private bookingService: BookingService, private router: Router, private datePipe: DatePipe,
    private excelService: ExcelService) {
    //subscribe to the router events
    // this.navigationSubscription = this.router.events.subscribe((e: any) => {
    //   if (e instanceof NavigationEnd) {
    //     //Nếu đó là một sự kiện NavigationEnd refesh lại hàm (hoặc ngOnInit)
    //     this.getListBooking(this.startDate, this.endDate);
    //   }
    // });
  }

  ngOnInit() {
    this.getListBooking();
  }

  parseStatus(statusVI: string): string {
    if (statusVI === StatusVI.ACCEPTED) {
      statusVI = Status.ACCEPTED;
    }
    else if (statusVI === StatusVI.DOCTOR_CANCEL) {
      statusVI = Status.DOCTOR_CANCEL;
    }
    else if (status === StatusVI.DOCTOR_CANCEL) {
      statusVI = Status.DOCTOR_CANCEL;
    }
    else if (status === StatusVI.EXPIRED) {
      statusVI = Status.EXPIRED;
    }
    else if (status === StatusVI.FINISHED) {
      statusVI = Status.FINISHED;
    }
    else if (status === StatusVI.PATIENT_CANCEL) {
      statusVI = Status.PATIENT_CANCEL;
    }
    else if (status === StatusVI.WAITING) {
      statusVI = Status.WAITING;
    }
    else if (status === "Tất cả") {
      statusVI = '';
    }
    return statusVI;
  }

  onSelect() {
    this.getListBooking();
  }

  getListBooking() {
    let statusVI = this.parseStatus(this.status[0].item_text)
    this.bookingService.getListBooking(statusVI, this.keyword)
      .subscribe(
        result => {
          this.listBooking = result.content;
          this.config = {
            itemsPerPage: 20,
            currentPage: 1,
            totalItems: this.listBooking.length
          };
          this.listBooking.forEach(x => {
            x.dateFormat = this.getDay(x.dateTime);
            if (x.status === Status.ACCEPTED) {
              x.statusVI = StatusVI.ACCEPTED;
            }
            else if (x.status === Status.DOCTOR_CANCEL) {
              x.statusVI = StatusVI.DOCTOR_CANCEL;
            }
            else if (x.status === Status.DOCTOR_CANCEL) {
              x.statusVI = StatusVI.DOCTOR_CANCEL;
            }
            else if (x.status === Status.EXPIRED) {
              x.statusVI = StatusVI.EXPIRED;
            }
            else if (x.status === Status.FINISHED) {
              x.statusVI = StatusVI.FINISHED;
            }
            else if (x.status === Status.PATIENT_CANCEL) {
              x.statusVI = StatusVI.PATIENT_CANCEL;
            }
            else if (x.status === Status.WAITING) {
              x.statusVI = StatusVI.WAITING;
            }
          })
        }
      )
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  getDay(date: string) {
    var weekday = new Array(7);
    weekday[0] = "CN";
    weekday[1] = "Thứ 2";
    weekday[2] = "Thứ 3";
    weekday[3] = "Thứ 4";
    weekday[4] = "Thứ 5";
    weekday[5] = "Thứ 6";
    weekday[6] = "Thứ 7";

    //date format là dd/mm/YYYY HH:mm nên cắt lấy dd/mm/YYYY phần đầu trước dấu cách
    var dateString = date.substr(0, date.indexOf(' '));
    var dateParts = dateString.split("/");

    var dateObject: Date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
    return weekday[dateObject.getDay()] + ", " + date;
  }

  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.listBooking, 'Danh sách lịch hẹn');
  }
}
