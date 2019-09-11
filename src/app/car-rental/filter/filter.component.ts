import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarServiceService } from 'src/app/service/car-service.service';
import { ReservationServiceService } from 'src/app/service/reservation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  cars: Car[];
  pickUpDateText: string;
  returnDateText: string;
  transmissionText: string;
  vehicleTypeText: string;

  constructor(private carServiceService: CarServiceService, private reservatioService: ReservationServiceService, private router: Router) { }

  ngOnInit() {
  }

  filterAvailableCars(event) {
    this.carServiceService.filterAvailableCars(this.pickUpDateText, this.returnDateText, 
      this.vehicleTypeText, this.transmissionText).subscribe(data => {
		  this.cars = data;

}
      )}}