import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../component/models/car.model';
import { BaseApi } from './base-api';

@Injectable()
export class CarService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }
    getCars(): Observable<Car[]> {
        return this.get();
    };

    addCars(car: Car) {
        return this.put(car);
    }

    editCars(car: Car) {
        return this.put(car);
    }

    deleteCars(car: Car) {
        return this.put(car);
    }

} 