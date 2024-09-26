import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'home', component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: "users",
        loadChildren: () => import('./views/user/user.module').then((m) => m.UserModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
