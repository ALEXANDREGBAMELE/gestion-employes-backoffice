import { Component, OnInit } from '@angular/core';
import { IBasicCrudParams } from 'src/app/shared/models/crud/basic-crud-params';
import { FormsItemType } from 'src/app/shared/models/crud/enums/forms-item-type.enum';
import { environment } from 'src/environments/environment';

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
      endPoint: `${environment.BASE_URL}/employee/getAll`,
      actionParam: {
        create: {
          endPoint: `${environment.BASE_URL}/employee/create`,
          action: ''
        },
        update: {
          endPoint: `${environment.BASE_URL}/employee/update`,
          action: ''
        },
        delete: {
          endPoint: `${environment.BASE_URL}/employee/delete`,
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
    { type: 'string', name: 'Nom et prénom', concatItems: ['firstName', 'lastName'] },
    { type: 'string', name: 'Email', value: 'email' },
    { type: 'string', name: 'Fonction', value: 'position' },
    // { type: 'string', name: 'Date Embauche', value: 'dateEmbauche' },
    // { type: 'string', name: 'Salaire Annuel', value: 'salaireAnnuel' },
    // { type: 'string', name: 'Departement', value: 'departement' },
    // { type: 'string', name: 'Superviseur', value: 'superviseur' },
    { type: 'string', name: 'Téléphone', value: 'phoneNumber' },
    { type: 'string', name: 'Statut', value: 'statut' },
  ]

  // columns = [
  //   { type: 'string', name: 'Nom et prénom', value: 'nom' },
  //   { type: 'string', name: 'Email', value: 'email' },
  //   { type: 'string', name: 'Fonction', value: 'fonction' },
  //   { type: 'string', name: 'Date Embauche', value: 'dateEmbauche' },
  //   { type: 'string', name: 'Salaire Annuel', value: 'salaireAnnuel' },
  //   { type: 'string', name: 'Departement', value: 'departement' },
  //   { type: 'string', name: 'Superviseur', value: 'superviseur' },
  //   { type: 'string', name: 'Statut', value: 'statut' },
  // ]
  formItems = [
    {
      type: FormsItemType.TEXT,
      name: 'firstName',
      label: 'Prénom',
      placeholder: 'Entrez le prénom',
      validators: ['required', 'minLength:2']
    },
    {
      type: FormsItemType.TEXT,
      name: 'lastName',
      label: 'Nom',
      placeholder: 'Entrez le nom',
      validators: ['required', 'minLength:2']
    },
    {
      type: FormsItemType.TEXT,
      name: 'email',
      label: 'Email',
      placeholder: 'Entrez l\'email',
      validators: ['required', 'email']
    },
    {
      type: FormsItemType.TEXT,
      name: 'phone',
      label: 'Téléphone',
      placeholder: 'Entrez le numéro de téléphone',
      validators: ['required', 'pattern:^[0-9]{10,15}$']
    },
    {
      type: FormsItemType.TEXT,
      name: 'position',
      label: 'Fonction',
      placeholder: 'Entrez la fonction',
      validators: ['required']
    },
    {
      type: FormsItemType.DATE,
      name: 'startDate',
      label: 'Date de début',
      placeholder: 'Sélectionnez une date',
      validators: ['required']
    },
    {
      type: FormsItemType.SELECT,
      id: 'contractType',
      name: 'contractType',
      label: 'Type de contrat',
      selectParams: {
        items: [
          { name: 'CDI', value: 'CDI' },
          { name: 'CDD', value: 'CDD' },
          { name: 'Stage', value: 'Stage' }
        ],
      },
      validators: ['required']
    },
    {
      type: FormsItemType.TEXT,
      name: 'hourlyRate',
      label: 'Taux horaire',
      placeholder: 'Entrez le taux horaire',
      validators: ['required', 'pattern:^[0-9]*\\.?[0-9]+$']
    },
    {
      type: FormsItemType.TEXT,
      name: 'weeklyHours',
      label: 'Temps de travail (/semaine)',
      placeholder: 'Entrez le nombre d\'heures par semaine',
      validators: ['required', 'pattern:^[0-9]+$']
    },
    {
      type: FormsItemType.SELECT,
      name: 'contractStatus',
      label: 'Statut du contrat',
      id: 'contractStatus',
      selectParams: {
        items: [
          { name: 'Admin', value: 'admin' },
          { name: 'User', value: 'user' },
        ],
      },
      validators: ['required']
    }
  ];


}
