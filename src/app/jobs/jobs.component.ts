import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Job } from '../models';
import { JobComponent } from '../job/job.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'njs-jobs',
  standalone: true,
  imports: [NgFor, AsyncPipe, JobComponent, NgIf],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  path$ = this.route.url.pipe(map(result => result[0].path));
  jobs$ = this.jobsService.getJobs();

  constructor(private jobsService: JobsService, private route: ActivatedRoute){
  }

  trackByFn(index: number, job: Job): number {
    return job.id
  }
}
