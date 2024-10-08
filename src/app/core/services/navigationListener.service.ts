import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class NavigationListenerService {
    constructor(private router: Router,) {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                // Logique pour mettre à jour les breadcrumbs selon la route actuelle
                const breadcrumbs = this.createBreadcrumbs(this.router.routerState.root);

            });
    }

    private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<any> = []): Array<any> {
        const children: ActivatedRoute[] = route.children;

        if (children.length === 0) {
            return breadcrumbs;
        }

        for (const child of children) {
            const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
            if (routeURL !== '') {
                url += `/${routeURL}`;
            }

            const label = child.snapshot.data['breadcrumb'];
            if (label) {
                breadcrumbs.push({ label, url });
            }

            return this.createBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
}
