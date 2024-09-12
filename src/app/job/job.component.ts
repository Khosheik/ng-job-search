import { Component, Input } from '@angular/core';
import { Job } from '../models';
import { JobsService } from '../jobs.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'njs-job',
  standalone: true,
  imports: [NgIf],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() job!: Job;
  @Input() jobPage: Boolean = true;

  constructor(private jobsService: JobsService) {}

  //favor or unfavor job
  clickOnStar(job: Job) {
    this.job.isFavorite = !this.job.isFavorite;

    this.job.isFavorite ? this.jobsService.addToFavorite(job) : this.jobsService.removeFromFavorite(job)

  }
}
