import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./home/home.module').then((m) => m.HomeModule);
    },
  },
  {
    path: 'auth',
    loadChildren: () => {
      return import('./auth/auth.module').then((m) => m.AuthModule);
    },
  },

  {
    path: 'product',
    loadComponent: () => {
      return LayoutComponent;
    },
    children: [{
      path: '',
      component: ProductComponent
    }]
  },
];
