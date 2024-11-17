import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContratRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { CreateContratComponent } from './create-contrat/create-contrat.component';
import { DetailContractComponent } from './detail-contract/detail-contract.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { TypeContractComponent } from './type-contract/type-contract.component';
import { UpdateContractComponent } from './update-contract/update-contract.component';
import { ClauseContractComponent } from './clause-contract/clause-contract.component';
import { AvantageContractComponent } from './avantage-contract/avantage-contract.component';


@NgModule({
  declarations: [
    CreateContratComponent,
    ListContractComponent,
    DetailContractComponent,
    UpdateContractComponent,
    TypeContractComponent,
    ContractComponent,
    ClauseContractComponent,
    AvantageContractComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    SharedModule,
    RouterOutlet,
  ]
})
export class ContratModule { }
