import { Routes } from '@angular/router';
import { MessageService } from 'primeng/api';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/example/example.routes').then((mod) => mod.ROUTES),
  },
];
