import { Contract } from "src/app/shared/models/contract";

export class GetContractsAction {
    static readonly type = '[Contracts] Get Contracts';
    constructor(public sort?: string) { }
}

export class AddContractAction {
    static readonly type = '[Contract] Add Contract';
    constructor(public contract: Contract) { }
}

export class UpdateContractAction {
    static readonly type = '[Contract] Update Contract';
    constructor(public contract: Contract) { }
}

export class DeleteContractAction {
    static readonly type = '[Contract] Delete Contract';
    constructor(public id: number) { }
}
