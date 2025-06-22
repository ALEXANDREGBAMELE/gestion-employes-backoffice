import { Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ErrorNotificationService } from 'src/app/core/services/error-notification.service';
import { Contract } from 'src/app/shared/models/contract';
import { FormsItemType } from 'src/app/shared/models/crud/enums/forms-item-type.enum';
import { IFormItem } from 'src/app/shared/models/crud/formItem';
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

  public contractTypes = [
    { name: 'CDD', value: 'CDD' },
    { name: 'CDI', value: 'CDI' },
    { name: 'Stage', value: 'Stage' },
    { name: 'Prestation', value: 'Prestation' },
  ];

  public formItems: IFormItem[] = [];
  public formGroup: FormGroup = new FormGroup({});

  private errorNotificationService = inject(ErrorNotificationService)
  private store = inject(Store)

  @Select(ContractState.getContractsList) contracts$!: Observable<Contract[]>;

  constructor() { }

  ngOnInit(): void {
    this.setFormItems('CDD'); // par défaut
    this.store.dispatch(new GetContractsAction());
    console.log(this.contracts$);
    this.initializComponent()

  }

  initializComponent() {
    this.basicCrudParams = {
      columns: this.columns,
      endPoint: "http://localhost:3000/contrats",
      formItems: this.setFormItems('CDD'),
      actionParam: {
        create: {
          endPoint: 'http://localhost:3000/users',
          action: ''
        },
        update: {
          endPoint: '',
          action: ''
        },
        delete: {
          endPoint: 'http://localhost:3000/users',
          action: ''
        },
        getDetail: {
          endPoint: '',
          action: ''
        }
      }
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



  setFormItems(contractType: string) {
    return this.formItems = [
      {
        name: 'contractType',
        label: 'Type de contrat',
        type: FormsItemType.SELECT,
        selectParams: { items: this.contractTypes },
        required: true,
      },
      { name: 'employeeName', label: 'Nom complet', type: FormsItemType.TEXT, required: true },
      { name: 'startDate', label: 'Date de début', type: FormsItemType.DATE, required: true },
      ...(contractType !== 'CDI' ? [{ name: 'endDate', label: 'Date de fin', type: FormsItemType.DATE, required: true }] : []),
      { name: 'position', label: 'Poste', type: FormsItemType.TEXT, required: true },
      { name: 'salary', label: 'Salaire', type: FormsItemType.NUMBER, required: true },
      ...(contractType === 'CDD' ? [
        { name: 'motif', label: 'Motif du CDD', type: FormsItemType.TEXT, required: true },
        { name: 'idScan', label: 'Scan carte ID', type: FormsItemType.FILE, required: true }
      ] : []),
      ...(contractType === 'Stage' ? [
        { name: 'supervisor', label: 'Responsable stage', type: FormsItemType.TEXT, required: true },
        { name: 'convention', label: 'Convention de stage', type: FormsItemType.FILE, required: true }
      ] : []),
      ...(contractType === 'Prestation' ? [
        { name: 'missionDescription', label: 'Description mission', type: FormsItemType.TEXTAREA, required: true },
        { name: 'totalDays', label: 'Durée (jours)', type: FormsItemType.NUMBER, required: true },
        { name: 'attachments', label: 'Fichiers annexes', type: FormsItemType.FILE, required: false }
      ] : []),
      { name: 'signature', label: 'Signature (optionnelle)', type: FormsItemType.FILE, required: false },
    ];

    this.formGroup = new FormGroup({});
  }


}
