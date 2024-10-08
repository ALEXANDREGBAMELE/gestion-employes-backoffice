import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DrawerService {
    private isOpen = false; // Variable interne pour suivre l'état du drawer
    private drawerState = new Subject<boolean>();

    drawerState$ = this.drawerState.asObservable();

    toggleDrawer(isOpen?: boolean) {
        // Si isOpen est défini, on l'utilise, sinon on bascule l'état
        this.isOpen = isOpen !== undefined ? isOpen : !this.isOpen;
        this.drawerState.next(this.isOpen);
    }
}
