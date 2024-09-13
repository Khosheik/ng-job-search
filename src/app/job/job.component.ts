import { Component, Input } from '@angular/core';
import { Job } from '../models';
import { JobsService } from '../jobs.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'njs-job',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() job!: Job;

  constructor(private jobsService: JobsService) {}

  //favor or unfavor job
  clickOnStar(job: Job) {
    this.job.isFavorite = !this.job.isFavorite;

    this.job.isFavorite ? this.jobsService.addToFavorite(job) : this.jobsService.removeFromFavorite(job)

  }
}
