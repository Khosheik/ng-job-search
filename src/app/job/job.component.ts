import { Component, Input } from '@angular/core';
import { Job } from '../models';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'njs-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() job!: Job;

  isFavorite = false;

  constructor(private jobsService: JobsService) { }

  //favor or unfavor job
  clickOnStar(job: Job) {
    this.isFavorite = !this.isFavorite;

    this.isFavorite ? this.jobsService.addToFavorite(job) : this.jobsService.removeFromFavorite(job)

  }
}
