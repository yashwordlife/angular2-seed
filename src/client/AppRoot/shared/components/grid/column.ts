import {Component} from 'angular2/core';

@Component({
    selector: 'column',
    templateUrl: 'AppRoot/shared/components/grid/grid.html'
})
export class Column {
    name: string;
    descr: string;
    constructor(name,descr){
        this.name = name;
        this.descr = descr;
    }
}