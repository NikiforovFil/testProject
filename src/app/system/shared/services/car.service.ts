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
        return this.get('cars');
    };

    addCars(car: Car) {
        return this.post('cars', car);
    }

    editCars(car: Car) {
        return this.put('cars', car);
    }

    deleteCars(id: number) {
        return this.delete('cars', id);
    }

} 