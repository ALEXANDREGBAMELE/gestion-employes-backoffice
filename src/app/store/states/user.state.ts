import { Injectable, inject } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable, tap } from "rxjs";
import { UserService } from "src/app/core/services/user.service";
import { User } from "src/app/shared/models/user";
import { GetUsersAction } from "../actions/user.action";

export interface UserStateModel {
    usersList: User[]
}

@State({
    name: 'users',
    defaults: {
        usersList: []
    }
})
@Injectable()
export class UserState {
    private userService = inject(UserService)

    @Selector()
    static getUsersList(state: UserStateModel): User[] {
        return state.usersList
    }

    @Action(GetUsersAction)
    getUsers(context: StateContext<UserStateModel>, action: GetUsersAction): Observable<any> {
        return this.userService.getAll(action.sort)
            .pipe(
                tap((users: User[]) => {
                    context.patchState({
                        usersList: users
                    })
                })
            )
    }
}