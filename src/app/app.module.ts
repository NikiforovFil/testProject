import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { MainComponent } from './system/main/main.component';
import { HeaderComponent } from './system/shared/component/header/header.component';
import { CarService } from './system/shared/services/car.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [CarService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
