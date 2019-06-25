export interface StatisticCourseRes {
    thisYear: YearStatistic;
    lastYear: YearStatistic;
}

export class YearStatistic {
    listMost10Course: StatisticOverView[];
    numberOfCouses: number;
}

export class StatisticOverView {
    id: number;
    name: string;
    numberOfClasses: number;
}