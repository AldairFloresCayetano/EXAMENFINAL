import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { HomeComponent } from 'app/modules/admin/pages/home/home.component';
import { homeRoutes } from 'app/modules/admin/pages/home/home.routing';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports     : [
        RouterModule.forChild(homeRoutes),
        MatButtonModule,
        MatIconModule,
        FuseCardModule,
        SharedModule
    ]
})
export class HomeModule
{
}
