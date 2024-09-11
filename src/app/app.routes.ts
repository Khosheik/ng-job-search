import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

export const routes: Routes = [
    { path: '', component: JobsComponent }, 
    { path: 'jobs', component: JobsComponent},
    { path: 'favorites', component: JobsComponent},
];
