import { Route } from '@angular/router';
import { MyQuotesComponent } from 'app/modules/admin/pages/my-quotes/my-quotes.component';

export const myquotesRoutes: Route[] = [
    {
        path     : '',
        component: MyQuotesComponent
    }
];
