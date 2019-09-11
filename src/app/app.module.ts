import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarServiceService } from './service/car-service.service';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReservationsComponent } from './car-rental/reservations/reservations.component';
import { CartComponent } from './car-rental/cart/cart.component';
import { FilterComponent } from './car-rental/filter/filter.component';
import { CustomerReservationsComponent } from './car-rental/customer-reservations/customer-reservations.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    ReservationFormComponent,
    ReservationsComponent,
    CartComponent,
    FilterComponent,
    CustomerReservationsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
	MatButtonModule,
	MatCheckboxModule
  ],
  providers: [CarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
