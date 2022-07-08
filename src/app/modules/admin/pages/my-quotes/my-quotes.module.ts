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
import { MyQuotesComponent } from 'app/modules/admin/pages/my-quotes/my-quotes.component';
import { myquotesRoutes } from 'app/modules/admin/pages/my-quotes/my-quotes.routing';
import { SharedModule } from 'app/shared/shared.module';
@NgModule({
    declarations: [
        MyQuotesComponent
    ],
    imports     : [
        RouterModule.forChild(myquotesRoutes),
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
export class MyQuotesModule
{
}
