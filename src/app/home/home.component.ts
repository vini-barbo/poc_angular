import { Component } from '@angular/core';

import { GridComponent } from '../shared/ui/grid/grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GridComponent],
  template: ` <app-grid /> `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
