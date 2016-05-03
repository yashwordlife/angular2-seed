import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'header',
  templateUrl: 'AppRoot/shared/components/header/header.html',
  directives: [CORE_DIRECTIVES],
  properties: ['number', 'comments', 'colour', 'type'],

})
export class HeaderComponent {
  number:number;
  comments:string;
  colour:string;
  type:string;
}
