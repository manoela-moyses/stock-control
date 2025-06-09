import { DashboardHomeComponent } from './page/dashboard-home/dashboard-home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
  },
];
