//Imports
import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DashboardComponent} from '../dashboard/dashboard.component'
import {HeaderComponent} from '../../../shared/components/header/header.component'
import {NavbarComponent} from '../navbar/navbar.component'

@Component({
  selector: 'app',
  template: `<navbar></navbar>
        <div id="page-wrapper" style="min-height: 561px;">       
          <router-outlet></router-outlet>
        </div>  
  `,
  directives: [ROUTER_DIRECTIVES, HeaderComponent, NavbarComponent]
})
@RouteConfig([
  { path: '/', component: DashboardComponent, name: 'Dashboard', useAsDefault : true},
])
export class App {
}
