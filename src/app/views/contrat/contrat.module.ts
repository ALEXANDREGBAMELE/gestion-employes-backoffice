import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ContratRoutingModule } from './contrat-routing.module';
import { CreateContratComponent } from './create-contrat/create-contrat.component';
import { DetailContractComponent } from './detail-contract/detail-contract.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { UpdateContractComponent } from './update-contract/update-contract.component';


@NgModule({
  declarations: [
    CreateContratComponent,
    ListContractComponent,
    DetailContractComponent,
    UpdateContractComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    SharedModule
  ]
})
export class ContratModule { }
