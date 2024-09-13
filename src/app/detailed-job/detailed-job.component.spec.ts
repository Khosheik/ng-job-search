import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedJobComponent } from './detailed-job.component';

describe('DetailedJobComponent', () => {
  let component: DetailedJobComponent;
  let fixture: ComponentFixture<DetailedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedJobComponent]
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
