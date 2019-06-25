import { Component, OnInit } from '@angular/core';
import { StatisticCourseRes } from '../../../model/statisticCourseRes';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-statistical',
  templateUrl: './course-statistical.component.html',
  styleUrls: ['./course-statistical.component.scss']
})
export class CourseStatisticalComponent{

  // thisYear: string;
  // statisticCourse: StatisticCourseRes;
  // doughnutChartData:number[];
  // isDataThisYearAvailable: boolean = false;
  // isDataLastYearAvailable: boolean = false;
  // courseMostStu: Course;

  // dropdownList = []; 
  // selectedOption = [];
  // dropdownOptionSettings = {
  //   singleSelection: true,
  //   idField: 'id',
  //   textField: 'name',
  //   itemsShowLimit: 1,
  //   allowSearchFilter: true
  // };

  // public JSONobject = {}

  // public barChartThisYearOptions:any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartThisYearLabels:string[] = [];
  // public barChartThisYearType:string = 'bar';
  // public barChartThisYearLegend:boolean = true;
  // public barChartThisYearData:any[] = [];
  // public barChartThisYearColors = [
  //   {
  //     backgroundColor: 
  //       'rgba(225,10,24,0.4)',
      
  //   }
  // ];

  // public barChartLastYearOptions:any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLastYearLabels:string[] = [];
  // public barChartLastYearType:string = 'bar';
  // public barChartLastYearLegend:boolean = true;
  // public barChartLastYearData:any[] = [];
  // public barChartLastYearColors = [
  //   {
  //     backgroundColor:
  //       'rgba(0,0,255,0.5)'
  //   }
  // ];

  // public doughnutChartLabels:string[] = ["Số khóa học mở năm ngay","Số khóa học mở năm ngoái"];
  // public doughnutChartType:string = 'doughnut';
  // public doughnutChartColors = [
  // {
  //   backgroundColor: [
  //     'rgba(225,10,24,0.4)',
  //     'rgba(0,0,255,0.5)'
  // ]}];

  // constructor(private statisticService: StatisticService) {}

  // ngOnInit() {
  //   this.thisYear = '2018';
  //   this.doughnutChartData = [];
  //   this.dropdownList = [
  //     { id: 2018, name: '2018' },
  //     { id: 2017, name: '2017' },
  //     { id: 2016, name: '2016' }
  //   ];
  //   this.selectedOption[0] = this.dropdownList[0];
  //   this.getStatisticCourse();
  //   this.getCourseHasMostStudent();
  // }
 
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
  
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

  // getStatisticCourse()
  // {
  //   this.isDataThisYearAvailable = false;
  //   this.isDataLastYearAvailable = false;
  //   let labelsThisYear:string[] = [];
  //   let datasThisYear:any[] = [];
  //   let labelsLastYear:string[] = [];
  //   let datasLastYear:any[] = [];
  //   return this.statisticService.getCourseStatistic(this.thisYear)
  //   .subscribe(data => {
  //     this.statisticCourse = data;
  //     this.doughnutChartData = [this.statisticCourse.thisYear.numberOfCouses,
  //     this.statisticCourse.lastYear.numberOfCouses ];
     
  //    for (var i=0; i<this.statisticCourse.thisYear.listMost10Course.length; i++)
  //    {
  //     labelsThisYear.push(String(this.statisticCourse.thisYear.listMost10Course[i].name));
  //     datasThisYear.push(this.statisticCourse.thisYear.listMost10Course[i].numberOfClasses);
  //    }
    
  //    this.barChartThisYearData = [{data: datasThisYear, label: 'Số khóa đã mở năm nay'}];
  //    this.barChartThisYearLabels = labelsThisYear;
  //    this.isDataThisYearAvailable = true;
    
  //    for (var i=0; i<this.statisticCourse.lastYear.listMost10Course.length; i++)
  //    {
  //     labelsLastYear.push(String(this.statisticCourse.lastYear.listMost10Course[i].name));
  //     datasLastYear.push(this.statisticCourse.lastYear.listMost10Course[i].numberOfClasses);
  //    }

  //     this.barChartLastYearData =  [{data: datasLastYear, label: 'Số khóa đã mở năm ngoái'}];;
  //     this.barChartLastYearLabels = labelsLastYear;
  //     this.isDataLastYearAvailable = true;
  //   });   
  // }

  // getCourseHasMostStudent()
  // {
  //   return this.statisticService.getCourseHasMostStudent()
  //   .subscribe(data=>
  //     this.courseMostStu = data
  //     )
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
