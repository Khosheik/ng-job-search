import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { AsyncPipe } from '@angular/common';
import { JobComponent } from '../job/job.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'njs-jobs',
  standalone: true,
  imports: [AsyncPipe, JobComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  page = this.jobsService.isJobsOrFavoritesPage(this.route);
  jobs$ = this.jobsService.getJobs(this.page);
  favorites = this.jobsService.favoriteJobs;

  constructor(private jobsService: JobsService, private route: ActivatedRoute){}

}
