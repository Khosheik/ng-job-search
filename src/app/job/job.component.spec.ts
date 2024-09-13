import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobComponent } from './job.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true, 
  imports: [RouterLink, JobComponent], 
  template: `<njs-job [job]="job"/>`
})
export class JobTestComponent {
  job ={
    id: 98596,
    companyName: "Kraken",
    title: "Live Support Specialist - Mexico",
    companyLogo: "https://interstate21.com/job-search-app/Kraken.png",
    reference: "98596-live-support-specialist-mexico",
  }
}

describe('JobComponent', () => {
  let component: JobTestComponent;
  let fixture: ComponentFixture<JobTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobComponent],  
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
