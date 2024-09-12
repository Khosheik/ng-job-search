import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { AsyncPipe } from '@angular/common';
import { JobComponent } from '../job/job.component';
import { ActivatedRoute } from '@angular/router';
import { map, of } from 'rxjs';

@Component({
  selector: 'njs-jobs',
  standalone: true,
  imports: [AsyncPipe, JobComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  path$ = this.route.url.pipe(map(result => result[0].path));
  jobs$ = this.jobsService.getJobs(this.path$);
  favorites = this.jobsService.favoriteJobs;

  constructor(private jobsService: JobsService, private route: ActivatedRoute){
  }
}
