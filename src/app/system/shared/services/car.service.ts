import { Injectable } from "@angular/core";

@Injectable()
export class CarService {
    getCars(amount: Number) {
        return [
            {
                "Acceleration": 12,
                "Currency": "USD",
                "Cylinders": 8,
                "Displacement": 307,
                "Horsepower": 130,
                "Miles_per_Gallon": 18,
                "Name": "chevrolet chevelle malibu",
                "Origin": "USA",
                "Price": 7000,
                "Weight_in_lbs": 3504,
                "Year": "1970-01-01"
            },
            {
                "Acceleration": 11.5,
                "Currency": "EUR",
                "Cylinders": 8,
                "Displacement": 350,
                "Horsepower": 165,
                "Miles_per_Gallon": 15,
                "Name": "buick skylark 320",
                "Origin": "USA",
                "Price": 94000,
                "Weight_in_lbs": 3693,
                "Year": "1970-01-01"
            },
            {
                "Acceleration": 11,
                "Currency": "USD",
                "Cylinders": 8,
                "Displacement": 318,
                "Horsepower": 150,
                "Miles_per_Gallon": 18,
                "Name": "plymouth satellite",
                "Origin": "USA",
                "Price": 65000,
                "Weight_in_lbs": 3436,
                "Year": "1970-01-01"
            },
            {
                "Acceleration": 12,
                "Currency": "EUR",
                "Cylinders": 8,
                "Displacement": 304,
                "Horsepower": 150,
                "Miles_per_Gallon": 16,
                "Name": "amc rebel sst",
                "Origin": "USA",
                "Price": 30000,
                "Weight_in_lbs": 3433,
                "Year": "1970-01-01"
            },
            {
                "Acceleration": 10.5,
                "Currency": "USD",
                "Cylinders": 8,
                "Displacement": 302,
                "Horsepower": 140,
                "Miles_per_Gallon": 17,
                "Name": "ford torino",
                "Origin": "USA",
                "Price": 47000,
                "Weight_in_lbs": 3449,
                "Year": "1970-01-01"
            },
            {
                "Acceleration": 10,
                "Currency": "USD",
                "Cylinders": 8,
                "Displacement": 429,
                "Horsepower": 198,
                "Miles_per_Gallon": 15,
                "Name": "ford galaxie 500",
                "Origin": "USA",
                "Price": 96000,
                "Weight_in_lbs": 4341,
                "Year": "1970-01-01"
            },
            {
                "Acceleration": 9,
                "Currency": "USD",
                "Cylinders": 8,
                "Displacement": 454,
                "Horsepower": 220,
                "Miles_per_Gallon": 14,
                "Name": "chevrolet impala",
                "Origin": "USA",
                "Price": 46000,
                "Weight_in_lbs": 4354,
                "Year": "1970-01-01"
            },
            {
                "Acceleration": 8.5,
                "Currency": "USD",
                "Cylinders": 8,
                "Displacement": 440,
                "Horsepower": 215,
                "Miles_per_Gallon": 14,
                "Name": "plymouth fury iii",
                "Origin": "USA",
                "Price": 82000,
                "Weight_in_lbs": 4312,
                "Year": "1970-01-01"
            },
            {
                "Acceleration": 10,
                "Currency": "EUR",
                "Cylinders": 8,
                "Displacement": 455,
                "Horsepower": 225,
                "Miles_per_Gallon": 14,
                "Name": "pontiac catalina",
                "Origin": "USA",
                "Price": 38000,
                "Weight_in_lbs": 4425,
                "Year": "1970-01-01"
            },
            {
                "Acceleration": 8.5,
                "Currency": "EUR",
                "Cylinders": 8,
                "Displacement": 390,
                "Horsepower": 190,
                "Miles_per_Gallon": 15,
                "Name": "amc ambassador dpl",
                "Origin": "USA",
                "Price": 69000,
                "Weight_in_lbs": 3850,
                "Year": "1970-01-01"
            },
        ];
    };
} 