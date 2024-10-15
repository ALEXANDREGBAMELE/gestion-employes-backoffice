import { Component, inject, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ErrorNotificationService } from 'src/app/core/services/error-notification.service';
import { User } from 'src/app/shared/models/user';
import { DeleteUserAction, GetUsersAction } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/states/user.state';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styles: [
  ]
})
export class ListUserComponent implements OnInit {
  public users: User[] = [];
  public columns: any[] = [
    { title: 'Nom', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Rôle', key: 'role' },
  ];
  public loading: boolean = false;
  public noDataMessage: string = 'Aucune donnée disponible';
  public itemsPerPage: number = 5;
  public isModalOpen = false;

  private errorNotificationService = inject(ErrorNotificationService)
  private store = inject(Store)

  @Select(UserState.getUsersList) users$!: Observable<User[]>;


  ngOnInit(): void {


    this.store.dispatch(new GetUsersAction());
    console.log(this.users$);

    this.refreshData()

  }



  onHttpRequest() {
    // Simulation d'une requête HTTP qui échoue
    this.errorNotificationService.showError('Erreur serveur. Veuillez réessayer plus tard.', 'Erreur 500');
  }


  deleteUser(id: number) {
    this.store.dispatch(new DeleteUserAction(id));
  }
  refreshData(): void {
    console.log("voici user$ : ", this.users$);

  }

  // Actions des boutons dans le modal
  saveAction() {
    console.log('Sauvegarder les modifications');
    this.isModalOpen = false;
  }

  deleteAction() {
    console.log('Supprimer l\'élément');
    this.isModalOpen = false; // Fermer le modal après l'action
  }

  openModal() {
    this.isModalOpen = true; // Ouvrir le modal
  }

  closeModal() {
    this.isModalOpen = false; // Fermer le modal
  }

  actionButtons = [
    {
      label: 'Edit',
      action: (item: any) => this.editItem(item),
    },
    {
      label: 'Delete',
      action: (item: any) => this.deleteItem(item),
    },
  ];

  editItem(item: any) {
    console.log('Editing item:', item);
    // Logique pour éditer l'élément
  }

  deleteItem(item: any) {
    console.log('Deleting item:', item);
    // Logique pour supprimer l'élément
  }

  onSelectionChange(selectedItems: any[]) {
    console.log('Selected items:', selectedItems);
  }

  badgeConfig = {
    email: (value: string) => {
      switch (value) {
        case 'johndoe@example.com':
          return 'bg-yellow-500'; // Jaune pour "En attente"
        case 'Approuvé':
          return 'bg-green-500'; // Vert pour "Approuvé"
        case 'Rejeté':
          return 'bg-red-500'; // Rouge pour "Rejeté"
        default:
          return 'bg-gray-500'; // Gris par défaut
      }
    },
    priority: (value: string) => {
      switch (value) {
        case 'Haute':
          return 'tw-bg-red-500'; // Rouge pour "Haute"
        case 'Moyenne':
          return 'tw-bg-blue-500'; // Bleu pour "Moyenne"
        case 'Basse':
          return 'tw-bg-green-500'; // Vert pour "Basse"
        default:
          return 'tw-bg-gray-500'; // Gris par défaut
      }
    }
  };


}
