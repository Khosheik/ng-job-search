import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from '../models';
import { AsyncPipe, DatePipe } from '@angular/common';


@Component({
  selector: 'njs-detailed-job',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './detailed-job.component.html',
  styleUrl: './detailed-job.component.css'
})
export class DetailedJobComponent {
  job$: Observable<Job> ; 

  constructor(private jobsService: JobsService, private route: ActivatedRoute){
    const jobId = parseInt(this.route.snapshot.paramMap.get('jobId')!);
    this.job$ = this.jobsService.getDetailedJobFromApi(jobId);
  }
}
