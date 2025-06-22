import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',

    data: { breadcrumb: 'Employé' },
    component: EmployeeListComponent,
    children:
      [
        {
          path: '',

          data: { breadcrumb: 'Liste' },
          component: EmployeeListComponent,
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
