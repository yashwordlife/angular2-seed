import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {DashboardService} from './dashboard.service'
import {PillComponent} from '../../../shared/components/pill/pill.component';
import {GridComponent} from '../../../shared/components/grid/grid.component';
import {Column} from '../../../shared/components/grid/Column';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'dashboard',
  templateUrl: 'AppRoot/TaxReportsApp/components/dashboard/dashboard.html',
  directives: [CORE_DIRECTIVES, PillComponent, GridComponent, Column],
  providers : [DashboardService]
})
export class DashboardComponent {
	
	private jobs : Observable<any>;
	private taxReports : any;
	private columns : any;
	constructor( private _dashboardService : DashboardService) {
	this.taxReports = [];
	this.taxReports.push({taxId : '3213', amount : '50000', eld : '19/3/1990'});
	this.taxReports.push({taxId : '5434', amount : '23000', eld : '19/3/2010'});
	this.taxReports.push({taxId : '9911', amount : '54000', eld : '19/3/1993'});
	this.taxReports.push({taxId : '3213', amount : '90000', eld : '19/3/1990'});
	this.taxReports.push({taxId : '3213', amount : '65500', eld : '19/3/2003'});
	this.taxReports.push({taxId : '5541', amount : '88888', eld : '19/3/1990'});
	this.taxReports.push({taxId : '3333', amount : '98982', eld : '19/3/1990'});
	this.taxReports.push({taxId : '1111', amount : '40000', eld : '19/3/2001'});

	this.columns = [];
	this.columns.push(new Column('taxId','Tax ID'));
	this.columns.push(new Column('amount','Amount'));
	this.columns.push(new Column('eld','ELD'));
	}
	ngOnInit() {
		this.jobs = this._dashboardService.getHeroes();
	}
}
