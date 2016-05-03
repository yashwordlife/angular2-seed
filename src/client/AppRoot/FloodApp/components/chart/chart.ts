import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';
import {BaseChart} from '../charts/charts'

@Component({
  selector: 'chart',
  templateUrl: 'app/components/chart/chart-element.html',
  properties: ['title'],
  directives: [WrapperCmp, Chart, CORE_DIRECTIVES, BaseChart]
})
class Chart {
  title: string;
  constructor() {
    console.log('doughnut demo');
  }

  // events
  chartClicked(e:any) {
    console.log(e);
  }

  chartHovered(e:any) {
    console.log(e);
  }
  private doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  private doughnutChartData = [350, 450, 100];
  private doughnutChartType = 'Doughnut';
}

@Component({
  selector: 'chart-page',
  templateUrl: 'app/components/chart/chart.html',
  styleUrls: ['app/components/chart/chart.css'],
  directives: [WrapperCmp, Chart, CORE_DIRECTIVES]
})
export class ChartPage {
}
