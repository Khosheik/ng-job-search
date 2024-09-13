import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobsComponent } from './jobs.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { JobsService } from '../jobs.service';
import { of } from 'rxjs';

describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;
  let jobsService: jasmine.SpyObj<JobsService>;


  beforeEach(async () => {
    jobsService = jasmine.createSpyObj<JobsService>('JobsService', ['getJobs', 'isJobsOrFavoritesPage', 'favoriteJobs'])
    await TestBed.configureTestingModule({
      imports: [JobsComponent],
      providers: [
        provideHttpClient(), 
        provideHttpClientTesting(), 
        provideRouter([{path: 'jobs', component: JobsComponent}]), 
        {provide: JobsService, useValue: jobsService}
      ]
    }).compileComponents();

    jobsService.getJobs.and.returnValue(
      of([
        {
          id: 98596,
          companyName: "Kraken",
          title: "Live Support Specialist - Mexico",
          companyLogo: "https://interstate21.com/job-search-app/Kraken.png",
          reference: "98596-live-support-specialist-mexico",
        },
        {
          id: 75278,
          companyName: "Scroll.io",
          title: "People Operations Manager (Chinese / English)",
          companyLogo: "https://interstate21.com/job-search-app/scroll-io.jpg",
          reference: "75278-people-operations-specialist-chinese-and-english",
        },
      ])
    )
    jobsService.isJobsOrFavoritesPage.and.returnValue('jobs');
    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
