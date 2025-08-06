import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ButtonsComponent } from './buttons/buttons.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'table', component: TableComponent },
      { path: 'address', component: AddressFormComponent },
      { path: 'buttons', component: ButtonsComponent },
    ],
  },
];
