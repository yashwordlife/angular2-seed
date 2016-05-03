import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'stats',
  templateUrl: 'AppRoot/shared/components/stats/stats.html',
  directives: [CORE_DIRECTIVES],
  properties: ['number', 'comments', 'colour', 'type'],

})
export class StatsComponent {
  number:number;
  comments:string;
  colour:string;
  type:string;
}
