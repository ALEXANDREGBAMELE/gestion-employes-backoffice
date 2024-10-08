import { Component, inject, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { GetUsersAction } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/states/user.state';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styles: [
  ]
})
export class ListUserComponent implements OnInit {

  constructor() { }

  private store = inject(Store)
  @Select(UserState.getUsersList) users$!: Observable<User[]>;


  ngOnInit(): void {
    this.store.dispatch(new GetUsersAction());
    console.log(this.users$);

  }

}
