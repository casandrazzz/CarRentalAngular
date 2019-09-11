import { Component, OnInit } from '@angular/core';
import { Car } from 'C:/Users/Casandra/car-rental/src/app/model/car';
import { CarServiceService } from 'C:/Users/Casandra/car-rental/src/app/service/car-service.service';
import { ReservationServiceService } from '../service/reservation-service.service';
import { Router } from '@angular/router';
@Component({ 
  selector: 'app-car-list',
 
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit{
	
	
  cars: Car[];
  pickUpDateText: string;
  returnDateText: string;

  constructor(private carServiceService: CarServiceService, private reservatioService: ReservationServiceService, private router: Router) {
   }

  ngOnInit() {
	  
  }

  getAvailableCars(event) {
    this.carServiceService.getAvailableCarReservationDto(this.pickUpDateText, this.returnDateText).subscribe(data => {
		  this.cars = data;
});
  }

  carSelected(car:Car) {
    this.reservatioService.car = car;
    this.reservatioService.pickUpDate = this.pickUpDateText;
    this.reservatioService.returnDate = this.returnDateText;
    this.router.navigate(['/addreservation']);
  }
}

