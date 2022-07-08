/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyQuotesService } from 'app/core/my-quotes/my-quotes.service';
import { quotes } from 'app/mock-api/pages/my-quotes/data';
@Component({
    selector       : 'my-quotes',
    templateUrl    : './my-quotes.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyQuotesComponent implements OnInit
{
    q: Array<any> = [];
    length: number = 0;
    providers: any[] = [
        {
            name  : 'Azure',
            value : 'azure'
        },
        {
            name  : 'AWS',
            value : 'aws'
        },
        {
            name  : 'Oracle',
            value : 'oracle'
        }
    ];
    services: any[] = [
        {
            name  : 'Virtual Machines',
            value : 'vm'
        },
        {
            name  : 'Database',
            value : 'db'
        },
        {
            name  : 'Serverless Computing',
            value : 'sl'
        }
    ];
    formProvider = new FormControl();
    formService = new FormControl();
    selectedProvider: any[];
    selectedService: string[]=['vm', 'db', 'sl'];
   constructor( private myQuotesService: MyQuotesService)
   {
}
    ngOnInit(): void {
        this.getQuotes();
    }

    getQuotes() {
        this.q = quotes;
        this.length = this.q.length;
    }
    addProvider() {
        this.selectedProvider=this.formProvider.value;
    }

    addService() {
        this.selectedService=this.formService.value;
        if (this.selectedService.length === 0) {
            this.selectedService = ['vm', 'db', 'sl'];
        }
    }

}
