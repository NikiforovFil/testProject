import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../component/models/car.model';

@Injectable()
export class BaseApi {
    // private baseUrl = 'assets/cars.json';
    private baseUrl = 'http://localhost:3000/';

    constructor(public http: HttpClient) { }

    public get(url: string): Observable<any> {
        return this.http.get<any>(this.baseUrl + `${url}`);
    }

    public post(url: string, data: any): Observable<any> {
        return this.http.post<any>(this.baseUrl + `${url}`, data);
    }

    public put(url: string, data: any): Observable<any> {
        return this.http.put<any>(this.baseUrl + `${url}/${data.id}`, data);
    }
    public delete(url: string, id: number): Observable<any> {
        return this.http.delete<any>(this.baseUrl + `${url}/${id}`);
    }
}