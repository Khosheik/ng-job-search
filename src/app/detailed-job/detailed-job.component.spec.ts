import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailedJobComponent } from './detailed-job.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('DetailedJobComponent', () => {
  let component: DetailedJobComponent;
  let fixture: ComponentFixture<DetailedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedJobComponent], 
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
