import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';


@Component({
  selector: 'app-list-statistical',
  templateUrl: './list-statistical.component.html',
  styleUrls: ['./list-statistical.component.scss']
})

export class ListStatisticalComponent implements OnInit {

  // radioModel: string = 'Month';
  // classNumber: number;
  // courseNumber: number;
  // YearNow : string;
  // statisticClass: StatisticClassRes;
  // statisticCourse: StatisticCourseRes;
  // public lineChart1Data: any[];

  // constructor(private statisticService: StatisticService){ }

  // getNumberOfClass()
  // {
  //   return this.statisticService.getClassStatisticNumbers(this.YearNow)
  //   .subscribe(data => {
  //       this.statisticClass = data;
  //       this.classNumber = this.statisticClass.opened.thisYear.inYear;
  //     });
  // }

  // getNumberOfCourse()
  // {
  //   return this.statisticService.getCourseStatistic(this.YearNow)
  //   .subscribe(data => {
  //       this.statisticCourse = data;
  //       this.courseNumber = this.statisticCourse.thisYear.numberOfCouses;
  //     });
  // }

  ngOnInit(): void {
   
  }
}
