import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { DetailedJobComponent } from './detailed-job/detailed-job.component';

export const routes: Routes = [
    { 
        path: 'jobs', 
        children: [
            { path: '', component: JobsComponent }, 
            { path: ':jobId', component: DetailedJobComponent}
        ]
    },
    { path: 'favorites', component: JobsComponent },
    { path: '', redirectTo: 'jobs', pathMatch: 'full' },
];
