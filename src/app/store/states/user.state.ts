import { Injectable, inject } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable, tap } from "rxjs";
import { UserService } from "src/app/core/services/user.service";
import { User } from "src/app/shared/models/user";
import { AddUserAction, DeleteUserAction, GetUsersAction, UpdateUserAction } from "../actions/user.action";

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

    @Action(AddUserAction)
    addUser(ctx: StateContext<User[]>, action: AddUserAction) {
        return this.userService.create(action.user).pipe(
            tap((user) => {
                const state = ctx.getState();
                ctx.setState([...state, user]);
            })
        );
    }

    @Action(UpdateUserAction)
    updateUser(ctx: StateContext<User[]>, action: UpdateUserAction) {
        return this.userService.update(action.user).pipe(
            tap((updatedUser) => {
                const state = ctx.getState();
                const userList = state.map((user) => (user.id === updatedUser.id ? updatedUser : user));
                ctx.setState(userList);
            })
        );
    }

    @Action(DeleteUserAction)
    deleteUser(ctx: StateContext<User[]>, action: DeleteUserAction) {
        return this.userService.delete(action.id).pipe(
            tap(() => {
                const state = ctx.getState();
                const filteredArray = state.filter((user) => user.id !== action.id);
                ctx.setState(filteredArray);
            })
        );
    }

}