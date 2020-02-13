import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../component/models/car.model';
import { BaseApi } from './base-api';

@Injectable()
export class CartService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }
    private Url = 'cart';
    getCart(): Observable<Car[]> {
        return this.get(this.Url);
    };

    addToCart(car: Car) {
        return this.post(this.Url, car);
    }

    deleteFromCart(id: number) {
        return this.delete(this.Url, id);
    }

} 