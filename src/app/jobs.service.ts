import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './models';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  favoriteJobs: Job[];

  constructor(private http: HttpClient) {
    const storedFavoriteJobs = window.localStorage.getItem('FavoriteJobs')
    storedFavoriteJobs ? this.favoriteJobs = JSON.parse(storedFavoriteJobs) : this.favoriteJobs = [];
  }

  getJobs(): Observable<Array<Job>> {
    return this.http.get<Array<Job>>('/jobs')
  }

  getJobsWithFavoriteField(){
    const jobs = this.getJobs();
    const jobsWithFavoriteField = this.addFavoriteField(jobs)
    return jobsWithFavoriteField;
  }

  addToFavorite(job: Job) {
    const alreadyFavored = this.favoriteJobs.find((jobInFavorites) => jobInFavorites.id === job.id);

    if (!alreadyFavored) {
      this.favoriteJobs.push(job);
      window.localStorage.setItem('FavoriteJobs', JSON.stringify(this.favoriteJobs));
      console.log('add')
    }
  }

  removeFromFavorite(job: Job) {
    this.favoriteJobs = this.favoriteJobs.filter((jobInFavorites) => jobInFavorites.id !== job.id);
    window.localStorage.setItem('FavoriteJobs', JSON.stringify(this.favoriteJobs));
    console.log('remove')
  }

  addFavoriteField(jobs: Observable<Array<Job>>): Observable<Array<Job>> {
    return jobs.pipe(
      map((jobs) => {
        for (let job of jobs) {
          const isInFavorite = this.isInFavorites(job)
          const jobIndex = jobs.findIndex(jobInJobs => jobInJobs.id === job.id)
          jobs[jobIndex] = { ...job, isFavorite: isInFavorite };

        }
        return jobs
      })
    )
  }

  isInFavorites(job: Job) {
    const isFavorite = this.favoriteJobs.find((jobInFavorites) => jobInFavorites.id === job.id);
    return isFavorite ? true : false;
  }

}
