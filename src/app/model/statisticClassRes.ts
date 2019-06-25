export interface StatisticClassRes {
    ended: StatisticOverView;
    opened: StatisticOverView;
}


export interface StatisticOverView {
    thisYear: YearStatistic;
    lastYear: YearStatistic;
}

export class YearStatistic {
    inYear: number;
    quarter1: number;
    quarter2: number;
    quarter3: number;
    quarter4: number;
}