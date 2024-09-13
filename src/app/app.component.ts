import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { JobsComponent } from './jobs/jobs.component';

@Component({
  selector: 'njs-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, JobsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Find your job';
}
