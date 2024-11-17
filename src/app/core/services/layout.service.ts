import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    public isSidebarOpen = new BehaviorSubject<boolean>(true);
    public isFullScreen = new BehaviorSubject<boolean>(false);

    isSidebarOpen$ = this.isSidebarOpen.asObservable();
    isFullScreen$ = this.isFullScreen.asObservable();

    toggleSidebar() {
        this.isSidebarOpen.next(!this.isSidebarOpen.value);
    }

    setFullScreen(value: boolean) {
        this.isFullScreen.next(value);
    }
}
