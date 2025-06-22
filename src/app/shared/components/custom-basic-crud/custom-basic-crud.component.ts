
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  @Input() size: number = 10;
  @Input() totalItems!: number;
  @Input() page: number = 0;
  // paginationOptions = paginationOptions;

  // Recherche
  @Input() searchByFullText: string | undefined;
  @Input() requestParams!: {
    keyword?: string;
    page?: number;
    size?: number;
    sort?: string;
    sortDir?: string;
    [key: string]: any;
  };
  searchControl = new FormControl('');
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
    this.isLodingTableData = true;

    const queryParams = new URLSearchParams();

    Object.entries(this.requestParams || {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.set(key, value.toString());
      }
    });

    const url = `${this.basicCrudParams.endPoint}?${queryParams.toString()}`;

    this.apiService.get(url, {}).subscribe({
      next: (data: any) => {
        this.items = data.content;
        this.page = data.number + 1;
        this.size = data.size;
        this.totalItems = data.totalElements ?? data.totalItems ?? 0; // pagination éventuelle
        this.isLodingTableData = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.isLodingTableData = false;
      }
    });
  }

  handleSearch(keyword: string) {
    this.requestParams = {
      ...this.requestParams,
      keyword: keyword,
      page: 0, // reset page lors de la recherche
    };
    this.getItems();
  }

  handlePaginationChange(page: number, size: number) {

    this.requestParams = {
      ...this.requestParams,
      page: this.page - 1,
      size,
    };
    this.getItems();
  }


  handleSort(sort: string, sortDir: string) {
    this.requestParams = {
      ...this.requestParams,
      sort,
      sortDir,
    };
    this.getItems();
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
    const request = formData.value;
    const isUpdate = !!request.id;

    const endPoint = isUpdate ? this.actionParam.update.endPoint : this.actionParam.create.endPoint;

    const apiCall = isUpdate
      ? this.apiService.put<any>(endPoint, request)
      : this.apiService.post<any>(endPoint, request);

    apiCall.subscribe({
      next: (response) => {
        console.log("Réponse reçue :", response);
        this.isSubmitted = false;

        setTimeout(() => {
          this.closeModal();
          this.isToastOpen = true;
          this.message = isUpdate ? "Mise à jour effectuée avec succès" : "Création effectuée avec succès";
          this.typeMessage = "success";
          this.getItems();
        }, 1000);
      },
      error: (err) => {
        console.error("Erreur API :", err);
        this.isSubmitted = false;

        setTimeout(() => {
          this.closeModal();
          this.isToastOpen = true;
          this.message = "Opération échouée";
          this.typeMessage = "error";
        }, 1000);
      }
    });
  }





}
