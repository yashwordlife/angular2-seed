import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {
  ROUTER_DIRECTIVES
} from 'angular2/router';
import {ACCORDION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap'

@Component({
  selector: 'navbar',
  templateUrl: 'AppRoot/TaxReportsApp/components/navbar/navbar.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, ACCORDION_DIRECTIVES],
})
export class NavbarComponent {
}