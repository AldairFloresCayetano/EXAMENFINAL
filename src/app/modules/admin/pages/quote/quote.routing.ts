import { Route } from '@angular/router';
import { QuoteComponent } from 'app/modules/admin/pages/quote/quote.component';

export const quoteRoutes: Route[] = [
    {
        path     : '',
        component: QuoteComponent
    }
];
