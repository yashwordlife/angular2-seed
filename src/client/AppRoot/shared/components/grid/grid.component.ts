import {Component, OnInit} from 'angular2/core';
import {Column} from './Column';
import {Sorter} from './Sorter';

@Component({
    selector: 'grid',
    inputs: ['rows: rows','columns: columns'],
    templateUrl: 'AppRoot/shared/components/grid/grid.html'
})
export class GridComponent implements OnInit {
    columns:Array<Column>;
    rows:Array<any> = [];
    heroes : any = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado']
    sorter: Sorter;
    constructor(){
        this.sorter = new Sorter();
        this.columns = [];
    }
    ngOnInit() {
        console.log(this.rows);
        console.log(this.columns);
    }
    sort(key){
        this.sorter.sort(key, this.rows);
    }
}