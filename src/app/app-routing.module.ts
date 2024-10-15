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
        loadChildren: () => import('./views/user/user.module').then((m) => m.UserModule)
      },
      {
        path: "contract",
        loadChildren: () => import('./views/contrat/contrat.module').then((m) => m.ContratModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
