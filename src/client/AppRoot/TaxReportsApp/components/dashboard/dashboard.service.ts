// Imports
import {Injectable} from 'angular2/core';

@Injectable()
export class DashboardService {
  getJobs() {
  	var jobs = new Array<any>();
    jobs.push("Job 1");
    jobs.push("Job 2");
    return jobs;
  }
}