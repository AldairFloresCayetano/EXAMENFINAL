import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { PricingComponent } from 'app/modules/admin/pages/pricing/pricing.component';
import { pricingRoutes } from 'app/modules/admin/pages/pricing/pricing.routing';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        PricingComponent
    ],
    imports     : [
        RouterModule.forChild(pricingRoutes),
        MatButtonModule,
        MatIconModule,
        FuseCardModule,
        SharedModule
    ]
})
export class PricingModule
{
}
