import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContratRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { TypeContractComponent } from './type-contract/type-contract.component';
import { ClauseContractComponent } from './clause-contract/clause-contract.component';


@NgModule({
  declarations: [
    ListContractComponent,
    TypeContractComponent,
    ContractComponent,
    ClauseContractComponent,
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    SharedModule,
    RouterOutlet,
  ]
})
export class ContratModule { }
