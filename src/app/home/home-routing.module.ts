import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import path from 'path';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => LayoutComponent,
    children: [{
      path: '',
      component: HomeComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
