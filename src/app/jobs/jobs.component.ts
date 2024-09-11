import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { Job } from '../models';

@Component({
  selector: 'njs-jobs',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

  jobs$ = this.jobsService.getJobs()

  constructor(private jobsService: JobsService){}

  trackByFn(index: number, job: Job): number {
    return job.id
  }
}
