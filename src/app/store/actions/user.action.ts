import { User } from "src/app/shared/models/user";

export class GetUsersAction {
    static readonly type = '[Users] Get Users';
    constructor(public sort?: string) { }
}

export class AddUserAction {
    static readonly type = '[User] Add User';
    constructor(public user: User) { }
}

export class UpdateUserAction {
    static readonly type = '[User] Update User';
    constructor(public user: User) { }
}

export class DeleteUserAction {
    static readonly type = '[User] Delete User';
    constructor(public id: number) { }
}