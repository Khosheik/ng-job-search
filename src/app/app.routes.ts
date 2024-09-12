import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { FavoriteJobsComponent } from './favorite-jobs/favorite-jobs.component';

export const routes: Routes = [
    { path: 'jobs', component: JobsComponent},
    { path: 'favorites', component: FavoriteJobsComponent},
    { path: '', redirectTo: 'jobs', pathMatch: 'full' },
];
