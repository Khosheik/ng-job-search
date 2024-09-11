import { Component, Input } from '@angular/core';
import { Job } from '../models';

@Component({
  selector: 'njs-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
 @Input() job!: Job; 
}
