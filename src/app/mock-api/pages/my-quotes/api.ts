import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { quotes as quotesData } from 'app/mock-api/pages/my-quotes/data';
import { cloneDeep } from 'lodash-es';

@Injectable({
    providedIn: 'root'
})
export class MyQuotesMockApi
{
    private _quotes: any = quotesData;

    /*
     *Constructor
    */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/pages/my-quotes')
            .reply(() => [200, cloneDeep(this._quotes)]);
    }
}
