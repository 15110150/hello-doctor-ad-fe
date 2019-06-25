import { Component, OnInit } from '@angular/core';
import { StatisticClassRes } from '../../../model/statisticClassRes';

@Component({
  selector: 'app-class-statistical',
  templateUrl: './class-statistical.component.html',
  styleUrls: ['./class-statistical.component.scss']
})
export class ClassStatisticalComponent {

  // statisticClass: StatisticClassRes;
  // opened1: number;
  // opened2: number;
  // opened3: number;
  // opened4: number;
  // ended1: number;
  // ended2: number;
  // ended3: number;
  // ended4: number;
  // public barChartData: any[];
  // public lineChartData: any[];

  // thisYear: string;
  // lastYear: string;

  // dropdownList = []; 
  // selectedOption = [];
  // dropdownOptionSettings = {
  //   singleSelection: true,
  //   idField: 'id',
  //   textField: 'name',
  //   itemsShowLimit: 1,
  //   allowSearchFilter: true
  // };
  // thisDate: Date;
  // constructor(private statisticService: StatisticService) { 
  // }

  // ngOnInit() {
  //   this.barChartData= [
  //     {data: [], label: 'Số lớp đã mở'},
  //     {data: [], label: 'Số lớp hoàn thành'}
  //   ];
  //   this.lineChartData = [
  //     {data: [], label: 'Số lớp đã mở năm nay'},
  //     {data: [], label: 'Số lớp đã mở năm ngoái'}
  //   ];
  //   this.dropdownList = [
  //     { id: 2018, name: '2018' },
  //     { id: 2017, name: '2017' },
  //     { id: 2016, name: '2016' }
  //   ];
  //   this.selectedOption[0] = this.dropdownList[0];
  //   this.thisYear = '2018';
  //   this.getStatisticOfClass(); 
  // }
  // public barChartOptions: any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public lineChartOptions:any = {
  //   responsive: true
  // };

  // getStatisticOfClass()
  // {
  //   return this.statisticService.getClassStatisticNumbers(this.thisYear)
  //   .subscribe(data => {
  //      this.statisticClass = data;
  //      this.opened1= this.statisticClass.opened.thisYear.quarter1;
  //      this.opened2= this.statisticClass.opened.thisYear.quarter2;
  //      this.opened3= this.statisticClass.opened.thisYear.quarter3;
  //      this.opened4= this.statisticClass.opened.thisYear.quarter4;
  //      this.ended1= this.statisticClass.ended.thisYear.quarter1;
  //      this.ended2= this.statisticClass.ended.thisYear.quarter2;
  //      this.ended3= this.statisticClass.ended.thisYear.quarter3;
  //      this.ended4= this.statisticClass.ended.thisYear.quarter4;
  //      this.barChartData = [
  //       {data: [this.opened1, this.opened2, this.opened3, this.opened4], label: 'Số lớp đã mở'},
  //       {data: [this.ended1, this.ended2, this.ended3, this.ended4], label: 'Số lớp hoàn thành'}
  //     ];
  //     this.lineChartData = [
  //       {data: [this.opened1, this.opened2, this.opened3, this.opened4], label: 'Số lớp đã mở năm nay'},
  //       {data: [ this.statisticClass.ended.thisYear.quarter1,  this.statisticClass.ended.thisYear.quarter2,
  //         this.statisticClass.ended.thisYear.quarter3,  this.statisticClass.ended.thisYear.quarter4], label: 'Số lớp đã mở năm ngoái'}
  //     ];
  //     console.log( this.barChartData );
  //     });
  
  // }


  // public barChartLabels: string[] = ['Quí 1', 'Quí 2', 'Quí 3', 'Quí 4'];
  // public barChartType = 'bar';
  // public barChartLegend = true;

  // public lineChartLabels:Array<any> = ['Quí 1', 'Quí 2', 'Quí 3', 'Quí 4'];
  // public lineChartType:string = 'line';

  //  // events
  //  public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }

  // onOptionSelect(item: any) {
  //   if(this.selectedOption[0].id == 2016)
  //     this.thisYear = '2016';
  //   if(this.selectedOption[0].id == 2017)
  //     this.thisYear = '2017';
  //   if(this.selectedOption[0].id == 2018)
  //     this.thisYear = '2018';
  // }

}
