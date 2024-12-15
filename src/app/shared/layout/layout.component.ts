import { Component } from '@angular/core';
import { HeaderComponent } from '../ui/header/header.component';
import { FooterComponent } from '../ui/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <main [className]="'flex flex-col min-h-[100dvh] justify-between'">
      <app-header />
      <router-outlet></router-outlet>
      <app-footer />
    </main>
  `,
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
