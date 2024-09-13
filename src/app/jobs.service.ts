import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './models';
import { Observable, of, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  favoriteJobs: Job[];
  jobs$: Observable<Array<Job>> = of([]);

  constructor(private http: HttpClient) {
    const storedFavoriteJobs = window.localStorage.getItem('FavoriteJobs')
    storedFavoriteJobs ? this.favoriteJobs = JSON.parse(storedFavoriteJobs) : this.favoriteJobs = [];

  }

  getJobs(page: string){
    let jobs: Observable<Array<Job>> = this.addFavoriteField(this.http.get<Array<Job>>('/jobs'))   

    if(page === 'favorites') {
      console.log('fav')
      jobs = this.jobsFilteredByFavorite(jobs);  
    } 

    const jobsWithFavoriteField = this.addFavoriteField(jobs)

    this.jobs$ = jobsWithFavoriteField;
    return this.jobs$;
  }

  addToFavorite(job: Job) {
    const alreadyFavored = this.favoriteJobs.find((jobInFavorites) => jobInFavorites.id === job.id);

    if (!alreadyFavored) {
      this.favoriteJobs.push(job);
      window.localStorage.setItem('FavoriteJobs', JSON.stringify(this.favoriteJobs));
    }
  }

  removeFromFavorite(job: Job) {
    this.favoriteJobs = this.favoriteJobs.filter((jobInFavorites) => jobInFavorites.id !== job.id);
    window.localStorage.setItem('FavoriteJobs', JSON.stringify(this.favoriteJobs));
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

  jobsFilteredByFavorite(jobs: Observable<Array<Job>>){
    return jobs.pipe(
      map((jobs) => {
        const filteredJobs = jobs.filter(job => job.isFavorite === true)
        console.log(filteredJobs)
        return filteredJobs
      })
    )
  }

  isJobsOrFavoritesPage(route: ActivatedRoute){
    let parentPath;
    route.parent!.url.pipe(takeUntilDestroyed()).subscribe(result => parentPath = result[0].path);

    return parentPath ? 'jobs' : 'favorites'; 
  }

}
