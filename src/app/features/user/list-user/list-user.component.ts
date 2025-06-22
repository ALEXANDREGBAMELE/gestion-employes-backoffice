import { Component, OnInit } from '@angular/core';
import { IBasicCrudParams } from 'src/app/shared/models/crud/basic-crud-params';
import { FormsItemType } from 'src/app/shared/models/crud/enums/forms-item-type.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styles: [
  ]
})
export class ListUserComponent implements OnInit {
  basicCrudParams!: IBasicCrudParams;
  tableActionButtons: {} = {};
  baseUrl = environment.BASE_URL
  constructor() { }

  ngOnInit(): void {
    this.initializComponent()
  }
  initializComponent() {
    this.basicCrudParams = {
      tableColumnItem: this.columns,
      formItems: this.formItems,
      endPoint: `${this.baseUrl}/users/getAll` || "http://localhost:3000/users",
      actionParam: {
        create: {
          endPoint: `${this.baseUrl}/users/create` || 'http://localhost:3000/users',
          action: ''
        },
        update: {
          endPoint: `${this.baseUrl}/users/update` || '',
          action: ''
        },
        delete: {
          endPoint: `${this.baseUrl}/users/delete` || 'http://localhost:3000/users',
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
    { type: 'string', name: 'Nom', value: 'firstName' },
    { type: 'string', name: 'Prénom', value: 'lastName' },
    { type: 'string', name: 'Nom d’utilisateur', value: 'username' },
    { type: 'string', name: 'Email', value: 'email' },
    { type: 'string', name: 'Téléphone', value: 'phoneNumber' },
    { type: 'string', name: 'Adresse', value: 'address' },
    { type: 'string', name: 'Rôle(s)', value: 'roles' },
    { type: 'string', name: 'Nationalité', value: 'nationality' },
    { type: 'string', name: 'Langue', value: 'language' },
    { type: 'string', name: 'Genre', value: 'gender' },
    { type: 'string', name: 'Date de naissance', value: 'dateOfBirth' },
    { type: 'string', name: 'Dernière connexion', value: 'lastLoginAt' },
    { type: 'string', name: 'Adresse IP (connexion)', value: 'lastLoginIp' },
    { type: 'boolean', name: 'Actif', value: 'active' },
    { type: 'boolean', name: 'Vérifié', value: 'verified' },
    { type: 'boolean', name: '2FA activé', value: 'twoFactorEnabled' },
  ]
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
      type: FormsItemType.SELECT,
      name: 'gender',
      label: 'Sexe',
      placeholder: 'Sélectionnez le sexe',
      validators: ['required'],
      selectParams: {
        items: [
          { name: 'Homme', value: 'male' },
          { name: 'Femme', value: 'female' },
          { name: 'Autre', value: 'other' }
        ]
      }
    },
    {
      type: FormsItemType.TEXT,
      name: 'phoneNumber',
      label: 'Téléphone',
      placeholder: 'Entrez le numéro de téléphone',
      validators: ['required', 'pattern:^[0-9]{10,15}$']
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
      name: 'username',
      label: 'Nom d\'utilisateur',
      placeholder: 'Entrez le nom d\'utilisateur',
      validators: ['required']
    },
    {
      type: FormsItemType.SELECT,
      name: 'country',
      label: 'Pays',
      placeholder: 'Sélectionnez le pays',
      validators: ['required'],
      selectParams: {
        items: [
          { name: 'Côte d’Ivoire', value: 'CI' },
          { name: 'Sénégal', value: 'SN' },
          { name: 'France', value: 'FR' },
          { name: 'Maroc', value: 'MA' },
          { name: 'Autre', value: 'other' }
        ]
      }
    },
    {
      type: FormsItemType.SELECT,
      name: 'region',
      label: 'Région',
      placeholder: 'Sélectionnez la région',
      validators: ['required'],
      selectParams: {
        items: [
          { name: 'Abidjan', value: 'abidjan' },
          { name: 'Yamoussoukro', value: 'yamoussoukro' },
          { name: 'Bouaké', value: 'bouake' },
          { name: 'San Pedro', value: 'san_pedro' }
        ]
      }
    },
    {
      type: FormsItemType.SELECT,
      name: 'city',
      label: 'Ville',
      placeholder: 'Sélectionnez la ville',
      validators: ['required'],
      selectParams: {
        items: [
          { name: 'Abobo', value: 'abobo' },
          { name: 'Cocody', value: 'cocody' },
          { name: 'Yopougon', value: 'yopougon' },
          { name: 'Marcory', value: 'marcory' }
        ]
      }
    },
    {
      type: FormsItemType.TEXT,
      name: 'address',
      label: 'Adresse',
      placeholder: 'Entrez l\'adresse',
      validators: ['required']
    },
    {
      type: FormsItemType.SELECT,
      name: 'profile',
      label: 'Profil',
      placeholder: 'Sélectionnez le profil',
      validators: ['required'],
      selectParams: {
        items: [
          { name: 'Administrateur', value: 'admin' },
          { name: 'Utilisateur', value: 'user' },
          { name: 'Superviseur', value: 'supervisor' }
        ]
      }
    }
  ];




}
