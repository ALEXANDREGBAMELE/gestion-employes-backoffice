import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

const routes: Routes = [

  {
    path: "",
    data: { breadcrumb: 'Login' },
    loadChildren: () => import('./views/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: "", component: DefaultLayoutComponent,
    children: [
      { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: "dashboard",
        data: { breadcrumb: 'Dashbord' },
        loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: "users",
        data: { breadcrumb: 'User' },
        loadChildren: () => import('./views/user/user.module').then((m) => m.UserModule)
      },
      {
        path: "contract",
        data: { breadcrumb: 'RH' },
        loadChildren: () => import('./views/contrat/contract.module').then((m) => m.ContratModule)
      },
      {
        path: "employee",
        data: { breadcrumb: 'RH' },
        loadChildren: () => import('./views/employee/employee.module').then((m) => m.EmployeeModule)
      },
      {
        path: "parametre",
        data: { breadcrumb: 'Paramètre' },
        loadChildren: () => import('./views/setting/setting.module').then((m) => m.SettingModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
