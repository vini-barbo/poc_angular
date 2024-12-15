import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/ui/header/header.component';
import { GridComponent } from '../shared/ui/grid/grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, GridComponent],
  template: `
    <main>
      <app-header />
      <app-grid />
    </main>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
