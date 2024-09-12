import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './models';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  favoriteJobs: Job[];

  constructor(private http: HttpClient) {
    const storedFavoriteJobs = window.localStorage.getItem('FavoriteJobs')
    storedFavoriteJobs ? this.favoriteJobs = JSON.parse(storedFavoriteJobs) : this.favoriteJobs = [];

  }

  getJobs() {
    return this.http.get<Array<Job>>('/jobs')
  }

  addToFavorite(job: Job) {
    const alreadyFavored = this.favoriteJobs.find((jobToPush) => jobToPush.id === job.id); 

    if(!alreadyFavored){
      this.favoriteJobs.push(job);
      window.localStorage.setItem('FavoriteJobs', JSON.stringify(this.favoriteJobs));
    } 
  }

  removeFromFavorite(job: Job) {

  }





}
