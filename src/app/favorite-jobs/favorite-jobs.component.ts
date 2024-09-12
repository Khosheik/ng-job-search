import { Component } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { NgFor } from '@angular/common';
import { Job } from '../models';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'njs-favorite-jobs',
  standalone: true,
  imports: [JobComponent, NgFor],
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css'
})
export class FavoriteJobsComponent {

  favoriteJobs = this.jobsService.favoriteJobs; 

  constructor(private jobsService: JobsService){}

  trackByFn(index: number, job: Job): number {
    return job.id
  }

}
