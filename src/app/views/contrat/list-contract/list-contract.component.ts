import { Component, inject, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ErrorNotificationService } from 'src/app/core/services/error-notification.service';
import { Contract } from 'src/app/shared/models/contract';
import { GetContractsAction } from 'src/app/store/actions/contract.action';
import { ContractState } from 'src/app/store/states/contract.state';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styles: [
  ]
})
export class ListContractComponent implements OnInit {
  basicCrudParams!: any;

  public loading: boolean = false;
  public noDataMessage: string = 'Aucune donnée disponible';
  public itemsPerPage: number = 5;
  public isModalOpen = false;

  private errorNotificationService = inject(ErrorNotificationService)
  private store = inject(Store)

  @Select(ContractState.getContractsList) contracts$!: Observable<Contract[]>;

  constructor() { }

  ngOnInit(): void {

    this.store.dispatch(new GetContractsAction());
    console.log(this.contracts$);
    this.initializComponent()
  }

  initializComponent() {
    this.basicCrudParams = {
      columns: this.columns,
      endPoint: "http://localhost:3000/contrats"
    }

    console.log("La valeur de BasicCrudParam ", this.basicCrudParams);

  }

  columns = [

    { type: 'string', name: 'Nom et prénom', value: 'employeeName' },
    { type: 'string', name: 'Numéro du contrat', value: 'employeeId' },
    { type: 'string', name: 'Fonction', value: 'position' },
    { type: 'string', name: 'Date début', value: 'startDate' },
    { type: 'string', name: 'Date fin', value: 'endDate' },
    { type: 'string', name: 'Type contrat', value: '' },
    { type: 'string', name: 'Taux horaire', value: '' },
    { type: 'string', name: 'Temps de travail (/semaine)', value: '' },
    { type: 'string', name: 'Statut du contrat', value: 'status' },
  ]

}
