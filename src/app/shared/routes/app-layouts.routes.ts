import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'poll',
    loadChildren: './modules/poll/poll.module#PollModule'
  }
];
