/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
    selector       : 'quote',
    templateUrl    : './quote.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteComponent
{
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
    selectedService: any[];
    constructor()
    {
    }
    addProvider() {
        this.selectedProvider=this.formProvider.value;
    }

    addService() {
        this.selectedService=this.formService.value;
    }

}

