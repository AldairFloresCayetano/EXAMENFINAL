import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MyQuotesService
{
    private _quotes: ReplaySubject<any> = new ReplaySubject<any>(1);

    constructor(private _httpClient: HttpClient)
    {

    }
}
