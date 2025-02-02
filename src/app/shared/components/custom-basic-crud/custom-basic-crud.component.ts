
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { IBasicCrudParams } from '../../models/crud/basic-crud-params';

@Component({
  selector: 'custom-basic-crud',
  templateUrl: './custom-basic-crud.component.html',
  styles: [
  ]
})
export class CustomBasicCrudComponent implements OnInit {
  @Input() basicCrudParams!: IBasicCrudParams;
  columns!: any;
  items: any[] = [];
  formItems: any;
  saveItems!: FormGroup;

  actionParam!: any;
  rowData: {} = {};

  @Input() customActions = {
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    canLock: false,
    canActivate: false,
    canViewDetails: true,
  };

  isLodingTableData = false;
  isViewDetails: boolean = false;
  isModalOpen = false;
  isSubmitted = false;
  isToastOpen = false;
  message = "";
  typeMessage = "error"
  currentAction: 'create' | 'edit' | 'delete' | 'details' = 'create';


  actionName: string = '';
  entity: string = '';

  //PAGINATION
  itemsPerPage: number = 10;
  totalItems!: number;
  currentPage: number = 1;
  // paginationOptions = paginationOptions;

  logChanges(updatedFormGroup: FormGroup) {
    console.log('FormGroup mis à jour dans le parent :', updatedFormGroup);
  }

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.initializeComponent()
  }

  initializeComponent() {
    this.columns = this.basicCrudParams.tableColumnItem;
    this.actionParam = this.basicCrudParams.actionParam;
    this.formItems = this.basicCrudParams.formItems


    this.getItems();
  }



  getItems() {
    this.isLodingTableData = true
    this.apiService.get(this.basicCrudParams.endPoint ?? '404', { page: 1, limit: 10 }).subscribe({
      next: (data: any) => {
        this.items = data;
        this.isLodingTableData = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.isLodingTableData = false;
      }
    }
    );
  }

  // Handle button click
  // onButtonClick(action: string) {
  //   this.buttonClick.emit(action);
  // }

  // Méthode appelée lors du changement de page
  // handlePageChange(newPage: number): void {
  //   this.currentPage = newPage;
  //   this.onPageChange.emit(newPage);
  //   this.getItems();
  // }

  // Méthode appelée lors du changement du nombre d'éléments par page
  // handleItemsPerPageChange(newItemsPerPage: number): void {
  //   this.itemsPerPage = newItemsPerPage;

  //   this.currentPage = 1;
  //   this.onItemsPerPageChange.emit(newItemsPerPage);
  // }

  //Gestion des actions du tableau
  tableActionButtons = [
    {
      icon: 'ri-edit-2-fill',
      method: (data: any) => this.editData(data),
      condition: this.customActions.canUpdate,
      style: { color: 'blue' },
      title: 'Modifier',
    },
    {
      icon: 'ri-delete-bin-5-fill',
      method: (data: any) => this.deleteData(data),
      condition: this.customActions.canDelete,
      style: { color: 'red' },
      title: 'suprimer',
    },
    {
      icon: 'ri-eye-fill',
      method: (data: any) => this.viewDataDetails(data),
      condition: this.customActions.canViewDetails,
      style: { color: '' },
      title: 'voir detail',
    },
  ];

  // handleSelectChange(type: string, value: any) {
  //   switch (type) {
  //     // case 'structure':
  //     //   this.selectedStructure = value;
  //     //   break;
  //     // case 'agence':
  //     //   this.selectedAgence = value;
  //     //   break;
  //     case 'statut':

  //       break;
  //     default:
  //       break;
  //   }
  //   this.currentPage = 1;
  //   this.getItems();
  // }


  create() {
    this.openModal('create');
    this.actionName = 'Création';

  }

  editData(data: any) {
    this.actionName = 'Modification';
    this.openModal('edit', data);
  }

  deleteData(data: any) {
    this.actionName = 'Suppression';
    this.openModal('delete', data);
  }

  viewDataDetails(data: any) {
    this.actionName = 'Details';
    this.openModal('details', data);
    this.isViewDetails = true;
  }

  handleRowClick(rowData: any) {
    console.log('Ligne cliquée:', rowData);
    this.rowData = rowData;
  }

  // Méthodes pour ouvrir le modal avec l'action appropriée
  openModal(
    action: 'create' | 'edit' | 'delete' | 'details',
    data: any = null
  ) {
    this.isModalOpen = true;
    this.currentAction = action;

    // Définir les éléments et données spécifiques selon l'action
    if (action === 'create') {
      this.actionName = `Créer ${this.entity}`;
      // this.formItems = this.getFormItemsForCreate();
    } else if (action === 'edit') {
      this.actionName = `Modifier ${this.entity}`;
      // this.rowData = data;
      // this.formItems = this.getFormItemsForEdit();
    } else if (action === 'delete') {
      // this.actionName = `Supprimer  ${this.entity}`;;
      // this.rowData = data;
    } else if (action === 'details') {
      this.actionName = `Détails de l'élément ${this.entity}`;
      // this.rowData = data;
      // this.formItems = this.getFormItemsForDetails();
    }
  }

  // // Méthode pour fermer le modal
  closeModal(event?: any) {
    this.isModalOpen = false;
    this.currentAction = 'create';
    this.isModalOpen = event;
  }

  // Exemple de méthode pour confirmer la suppression
  confirmDelete(data: any) {
    this.isSubmitted = true
    this.apiService.delete(this.actionParam.delete.endPoint, data.id).subscribe({
      next: () => {
        this.isSubmitted = false
        this.isModalOpen = false
        this.isToastOpen = true
        this.message = " Votre supression a été un succès "
        this.typeMessage = "success"
        this.getItems()
      },
      error: () => {
        this.isSubmitted = false
      },
    })

    console.log("Voici la donnée à Suprimer : ", data.id);

  }

  onSubmit() {
    console.log("Voici la valeur de save Items : ", this.saveItems);

  }

  // // Méthodes de récupération de configuration des formulaires
  // getFormItemsForCreate() {

  //   return this.formItems = this.basicCrudParam.formsItems
  // }

  // getFormItemsForEdit() {
  //   return this.formItems = this.basicCrudParam.formsItems
  // }

  // getFormItemsForDetails() {
  //   return this.formItems = this.basicCrudParam.formsItems
  // }

  // initializeFormControls() {
  //   this.headerFormItems.forEach((item:any) => {
  //     if (item.type === 'text' || item.type === 'select') {
  //       this.form.addControl(item.formControlName, this.fb.control(''));
  //     }
  //   });
  // }
  // currentFormValues: any;
  // onFormValuesChange(values: any) {
  //   this.currentFormValues = values; // Mettez à jour les valeurs actuelles
  //   console.log('Valeurs du formulaire:', this.saveItems.value);
  // }

  handleFormSubmit(formData: FormGroup) {
    this.isSubmitted = true;
    console.log('Données du formulaire soumises:', formData);

    const request = formData.value;
    this.apiService.post<any>(this.actionParam.create.endPoint, request).subscribe({
      next: (response) => {
        console.log("Voici la reponse : ", response);
        this.isSubmitted = false;

        // Attendre 1 seconde avant de fermer le modal
        setTimeout(() => {
          this.closeModal();
          this.isToastOpen = true
          this.message = " Opération éffectuée avec succès "
          this.typeMessage = "success"
          this.getItems()
        }, 1000); // 1000 ms = 1 seconde
      },
      error: (err) => {
        console.error("Message erreur : ", err);
        this.isSubmitted = false;

        // Attendre 1 seconde avant de fermer le modal
        setTimeout(() => {
          this.closeModal();
          this.isToastOpen = true
          this.message = " Opération echouée "
          this.typeMessage = "error"
        }, 1000); // 1000 ms = 1 seconde
      }
    });
  }




}
