import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from '../shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => LayoutComponent,
    children: [
      {
        path: 'auth',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
