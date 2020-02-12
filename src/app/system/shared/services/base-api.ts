import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../component/models/car.model';

@Injectable()
export class BaseApi {
    // private baseUrl = 'assets/cars.json';
    private baseUrl = 'http://localhost:3000/cars';

    constructor(public http: HttpClient) { }

    public get(): Observable<any> {
        return this.http.get<any>(this.baseUrl);
    }

    public post(data: Car): Observable<any> {
        return this.http.post<any>(this.baseUrl, data);
    }

    public put(data: any = {}): Observable<any> {
        console.log(data)
        console.log(this.baseUrl)
        return this.http.put<any>(this.baseUrl, data);
    }
}