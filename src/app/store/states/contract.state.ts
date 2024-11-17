import { Injectable, inject } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable, tap } from "rxjs";
import { ContractService } from "src/app/core/services/contract.service"; // Assurez-vous que ce service existe
import { Contract } from "src/app/shared/models/contract"; // Assurez-vous que ce modèle existe
import { AddContractAction, DeleteContractAction, GetContractsAction, UpdateContractAction } from "../actions/contract.action";

export interface ContractStateModel {
    contractsList: Contract[]
}

@State<ContractStateModel>({
    name: 'contracts',
    defaults: {
        contractsList: []
    }
})
@Injectable()
export class ContractState {
    private contractService = inject(ContractService);

    @Selector()
    static getContractsList(state: ContractStateModel): Contract[] {
        return state.contractsList;
    }

    @Action(GetContractsAction)
    getContracts(context: StateContext<ContractStateModel>, action: GetContractsAction): Observable<any> {
        return this.contractService.getAll().pipe(
            tap((contracts: Contract[]) => {
                context.patchState({
                    contractsList: contracts
                });
            })
        );
    }

    @Action(AddContractAction)
    addContract(ctx: StateContext<ContractStateModel>, action: AddContractAction) {
        return this.contractService.create(action.contract).pipe(
            tap((contract) => {
                const state = ctx.getState();
                ctx.setState({
                    contractsList: [...state.contractsList, contract]
                });
            })
        );
    }

    @Action(UpdateContractAction)
    updateContract(ctx: StateContext<ContractStateModel>, action: UpdateContractAction) {
        return this.contractService.update(action.contract).pipe(
            tap((updatedContract) => {
                const state = ctx.getState();
                const contractsList = state.contractsList.map((contract) =>
                    contract.id === updatedContract.id ? updatedContract : contract
                );
                ctx.setState({ contractsList });
            })
        );
    }

    @Action(DeleteContractAction)
    deleteContract(ctx: StateContext<ContractStateModel>, action: DeleteContractAction) {
        return this.contractService.delete(action.id).pipe(
            tap(() => {
                const state = ctx.getState();
                const filteredArray = state.contractsList.filter((contract) => contract.id !== action.id);
                ctx.setState({ contractsList: filteredArray });
            })
        );
    }
}
