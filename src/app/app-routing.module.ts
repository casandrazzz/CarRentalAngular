import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { FilterComponent } from './car-rental/filter/filter.component';
import { CustomerReservationsComponent } from './car-rental/customer-reservations/customer-reservations.component';
 
const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'addreservation', component: ReservationFormComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'reservations', component: CustomerReservationsComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
