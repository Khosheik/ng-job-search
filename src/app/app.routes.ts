import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

export const routes: Routes = [
    { path: 'jobs', component: JobsComponent},
    { path: 'favorites', component: JobsComponent},
    { path: '', redirectTo: 'jobs', pathMatch: 'full' },
];
