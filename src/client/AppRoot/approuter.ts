import {App} from './TaxReportsApp/components/app/app';
import {App as FloodApp} from './FloodApp/components/app/app';

import {Component, ViewEncapsulation} from 'angular2/core';
import {
  ROUTER_DIRECTIVES,
  RouteConfig
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
@Component({
  selector: 'approuter',
  template: `
  <router-outlet></router-outlet>
  `,
  directives : [App,ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: 'TaxReportsApp/...', component: App, name: 'TaxReportsApp', useAsDefault : true },
  { path: 'FloodApp/...', component: FloodApp, name: 'FloodApp' },
])
export class AppRouter {
    
}