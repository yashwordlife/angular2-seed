import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'pill',
  templateUrl: 'AppRoot/shared/components/pill/pill.html',
  directives: [CORE_DIRECTIVES],
  properties: ['noOfJobs', 'noOfTaxIds', 'noOfAgencies','totalAmount','colour', 'type','status'],

})
export class PillComponent {
  noOfJobs:number;
  noOfTaxIds:number;
  noOfAgencies:number;
  totalAmount:number;
  status:string;
  colour:string;
  type:string;
}
