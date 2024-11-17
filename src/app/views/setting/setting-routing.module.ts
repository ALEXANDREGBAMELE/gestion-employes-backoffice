import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { SettingComponent } from './setting.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Entreprise' },
    component: SettingComponent,
    children: [
      {
        path: '',
        data: { breadcrumb: 'Liste' },
        component: CompaniesComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
