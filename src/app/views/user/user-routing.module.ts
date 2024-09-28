import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Users' },
    component: UserComponent,
    children: [
      {
        path: 'list',
        data: { breadcrumb: 'Liste' },
        component: ListUserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
