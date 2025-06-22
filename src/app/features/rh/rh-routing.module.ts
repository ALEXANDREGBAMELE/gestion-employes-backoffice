import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contracts',
        data: { breadcrumb: 'Contract' },
        loadChildren: () => import('./contrat/contract.module').then((m) => m.ContratModule)
      },
      {
        path: 'employees',
        data: { breadcrumb: 'Employees' },
        loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhRoutingModule { }
