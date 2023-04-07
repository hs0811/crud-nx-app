import { NxWelcomeComponent } from './nx-welcome.component';

import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path:'product-management',
    loadChildren: () => import('../../../../libs/product-management/feature-product/src/lib/product-management-product-features.module').then((m) => m.ProductManagementProductFeaturesModule)
  },

];
