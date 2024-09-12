import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { Job } from '../models';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'njs-jobs',
  standalone: true,
  imports: [NgFor, AsyncPipe, JobComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs$ = this.jobsService.getJobsWithFavoriteField()

  constructor(private jobsService: JobsService){}

  trackByFn(index: number, job: Job): number {
    return job.id
  }
}
