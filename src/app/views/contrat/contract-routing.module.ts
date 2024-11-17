import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClauseContractComponent } from './clause-contract/clause-contract.component';
import { ContractComponent } from './contract.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { TypeContractComponent } from './type-contract/type-contract.component';

const routes: Routes = [
  {
    path: "",
    data: { breadcrumb: 'Contract' },
    component: ContractComponent,
    children: [
      {
        path: "list",
        data: { breadcrumb: 'Liste' },
        component: ListContractComponent
      },
      {
        path: "type",
        data: { breadcrumb: 'Type' },
        component: TypeContractComponent
      },
      {
        path: "clause",
        data: { breadcrumb: 'Clause' },
        component: ClauseContractComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
