import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from 'C:/Users/Casandra/car-rental/src/app/service/car-service.service';
import { Reservation } from 'C:/Users/Casandra/car-rental/src/app/model/reservation';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { ReservationServiceService } from '../service/reservation-service.service';
import { Car } from '../model/car';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent{
	
	reservation: Reservation;
car : Car;
price : any;
currentCustomer : string;
  constructor(private route: ActivatedRoute, private router: Router, private reservationService: ReservationServiceService) {
    this.reservation = new Reservation();
    this.reservation.pickUpDate = reservationService.pickUpDate;
    this.reservation.returnDate = reservationService.returnDate;
    this.reservation.pkCar = reservationService.car.id;
    this.reservation.pkCostumer = 1;
    this.currentCustomer = "Millena Ford";
    this.car =reservationService.car;
    this.reservationService.calculatePrice(reservationService.pickUpDate, reservationService.returnDate, reservationService.car.vehicleType.toUpperCase())
    .subscribe(data => this.price = data);
  }

   
  onSubmit(){
	  this.reservationService.addReservation(this.reservation);  }
  


}
