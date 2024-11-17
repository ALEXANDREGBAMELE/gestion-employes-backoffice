import { Component, OnInit } from '@angular/core';
import { IBasicCrudParams } from 'src/app/shared/models/crud/basic-crud-params';
import { FormsItemType } from 'src/app/shared/models/crud/enums/forms-item-type.enum';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  basicCrudParams!: IBasicCrudParams;
  tableActionButtons: {} = {};
  constructor() { }

  ngOnInit(): void {
    this.initializComponent()
  }
  initializComponent() {
    this.basicCrudParams = {
      tableColumnItem: this.columns,
      formItems: this.formItems,
      endPoint: "http://localhost:3000/employes",
      actionParam: {
        create: {
          endPoint: 'http://localhost:3000/employes/create',
          action: ''
        },
        update: {
          endPoint: '',
          action: ''
        },
        delete: {
          endPoint: 'http://localhost:3000/employes',
          action: ''
        },
        getDetail: {
          endPoint: '',
          action: ''
        }
      }
    }

  }

  columns = [
    { type: 'string', name: 'Nom et prénom', value: 'nom' },
    { type: 'string', name: 'Email', value: 'email' },
    { type: 'string', name: 'Fonction', value: 'fonction' },
    { type: 'string', name: 'Date Embauche', value: 'dateEmbauche' },
    { type: 'string', name: 'Salaire Annuel', value: 'salaireAnnuel' },
    { type: 'string', name: 'Departement', value: 'departement' },
    { type: 'string', name: 'Superviseur', value: 'superviseur' },
    { type: 'string', name: 'Statut', value: 'statut' },
  ]
  formItems = [
    {
      type: FormsItemType.Input,
      formControlName: 'firstName',
      label: 'Prénom',
      placeholder: 'Entrez le prénom',
      validators: ['required', 'minLength:2']
    },
    {
      type: FormsItemType.Input,
      formControlName: 'lastName',
      label: 'Nom',
      placeholder: 'Entrez le nom',
      validators: ['required', 'minLength:2']
    },
    {
      type: FormsItemType.Input,
      formControlName: 'email',
      label: 'Email',
      placeholder: 'Entrez l\'email',
      validators: ['required', 'email']
    },
    {
      type: FormsItemType.Input,
      formControlName: 'phone',
      label: 'Téléphone',
      placeholder: 'Entrez le numéro de téléphone',
      validators: ['required', 'pattern:^[0-9]{10,15}$']
    },
    {
      type: FormsItemType.Input,
      formControlName: 'position',
      label: 'Fonction',
      placeholder: 'Entrez la fonction',
      validators: ['required']
    },
    {
      type: FormsItemType.Date,
      formControlName: 'startDate',
      label: 'Date de début',
      placeholder: 'Sélectionnez une date',
      validators: ['required']
    },
    {
      type: FormsItemType.Select,
      formControlName: 'contractType',
      label: 'Type de contrat',
      selectParams: {
        items: [
          { key: 'CDI', value: 'CDI' },
          { key: 'CDD', value: 'CDD' },
          { key: 'Stage', value: 'Stage' }
        ],
      },
      validators: ['required']
    },
    {
      type: FormsItemType.Input,
      formControlName: 'hourlyRate',
      label: 'Taux horaire',
      placeholder: 'Entrez le taux horaire',
      validators: ['required', 'pattern:^[0-9]*\\.?[0-9]+$']
    },
    {
      type: FormsItemType.Input,
      formControlName: 'weeklyHours',
      label: 'Temps de travail (/semaine)',
      placeholder: 'Entrez le nombre d\'heures par semaine',
      validators: ['required', 'pattern:^[0-9]+$']
    },
    {
      type: FormsItemType.Select,
      formControlName: 'contractStatus',
      label: 'Statut du contrat',
      selectParams: {
        value: '',
        items: [
          { key: 'Admin', value: 'admin' },
          { key: 'User', value: 'user' },
        ],
      },
      validators: ['required']
    }
  ];


}
