import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {AppRouter} from './AppRoot/approuter';
import {HttpService} from './AppRoot/shared/services/http.service'
import 'rxjs/Rx';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppRouter, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  HttpService
]);
