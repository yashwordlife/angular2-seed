// Imports
import {Injectable} from 'angular2/core';
import {HttpService} from '../../../shared/services/http.service'
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DashboardService {
  private heroes : Observable<any>;
  constructor(private _httpService : HttpService) {
    
  }
  getHeroes() : Observable<any> {
    this._httpService.getHeroes()
                     .subscribe(
                       heroes => console.log(heroes),
                       error =>  console.log(error));
    return this.heroes;
  }
}