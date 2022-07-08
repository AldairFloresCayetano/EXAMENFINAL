import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { QuoteComponent } from 'app/modules/admin/pages/quote/quote.component';
import { quoteRoutes } from 'app/modules/admin/pages/quote/quote.routing';
import { SharedModule } from 'app/shared/shared.module';
@NgModule({
    declarations: [
        QuoteComponent
    ],
    imports     : [
        RouterModule.forChild(quoteRoutes),
        MatButtonModule,
        MatIconModule,
        FuseCardModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDividerModule
    ]
})
export class QuoteModule
{
}
