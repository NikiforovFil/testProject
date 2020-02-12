import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BaseApi {
    private baseUrl = 'assets/cars.json';

    constructor(public http: HttpClient) { }

    public get(url: string = ''): Observable<any> {
        return this.http.get<any>(this.baseUrl);
    }

    public post(url: string = '', data: any = {}): Observable<any> {
        return this.http.post<any>(this.baseUrl, data);
    }

    public put(url: string = '', data: any = {}): Observable<any> {
        return this.http.put<any>(this.baseUrl, data);
    }
}