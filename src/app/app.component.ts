import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'poc'
}
