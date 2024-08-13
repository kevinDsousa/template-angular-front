import { Route } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { BlankComponent } from './blank/blank.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: ExampleComponent,
  },
  {
    path: 'blank',
    component: BlankComponent,
  },
];
