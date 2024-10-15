import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ErrorNotificationService } from 'src/app/core/services/error-notification.service';
import { User } from 'src/app/shared/models/user';
import { AddUserAction, UpdateUserAction } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent implements OnInit {
  public userForm!: FormGroup;
  public selectedUserId: number | null = null;
  private fb = inject(FormBuilder);
  private store = inject(Store)

  private errorNotificationService = inject(ErrorNotificationService)
  constructor() { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      if (this.selectedUserId) {
        // Update existing user
        user.id = this.selectedUserId;
        this.store.dispatch(new UpdateUserAction(user));
        this.errorNotificationService.showSuccess('Formulaire soumis avec succès.');
      } else {
        // Add new user
        this.errorNotificationService.showError('Veuillez remplir tous les champs obligatoires.');
        this.store.dispatch(new AddUserAction(user));
      }
      this.userForm.reset();
      this.selectedUserId = null;
    }
  }


  editUser(user: User) {
    this.userForm.patchValue(user);
    this.selectedUserId = user.id;
  }

  loadUserData(user: User) {
    this.userForm.patchValue(user);
    this.selectedUserId = user.id;
  }

  resetForm() {
    this.userForm.reset();
    this.selectedUserId = null;
  }

}
