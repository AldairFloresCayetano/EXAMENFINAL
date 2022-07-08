import { Route } from '@angular/router';
import { HomeComponent } from 'app/modules/admin/pages/home/home.component';

export const homeRoutes: Route[] = [
    {
        path     : '',
        component: HomeComponent
    }
];
