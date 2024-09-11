import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './models';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  getJobs() {
    return this.http.get<Array<Job>>('/jobs')
  }

  constructor(private http: HttpClient) { }

}
