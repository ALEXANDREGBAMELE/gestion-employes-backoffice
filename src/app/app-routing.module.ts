import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

const routes: Routes = [

  {
    path: "",
    data: { breadcrumb: 'Login' },
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: "", component: DefaultLayoutComponent,
    children: [
      { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: "dashboard",
        data: { breadcrumb: 'Dashbord' },
        loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: "admin/users",
        data: { breadcrumb: 'User' },
        loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule)
      },
      {
        path: "rh",
        data: { breadcrumb: 'RH' },
        loadChildren: () => import('./features/rh/rh.module').then((m) => m.RhModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
