import { NxWelcomeComponent } from './nx-welcome.component';

import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path:'product-management',
    loadChildren: () => import('@crud-nx-app/product-management/feature-home').then((m) => m.ProductManagementFeatureHomeModuleTs)
  },

];
