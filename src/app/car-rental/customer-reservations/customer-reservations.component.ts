import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { ReservationServiceService } from 'src/app/service/reservation-service.service';
import { CarServiceService } from 'src/app/service/car-service.service';
import { Router } from '@angular/router';
import { constructor } from 'q';
import { CustomerReservations } from 'src/app/model/customer-reservations.model';

@Component({
  selector: 'app-customer-reservations',
  templateUrl: './customer-reservations.component.html',
  styleUrls: ['./customer-reservations.component.css']
})
export class CustomerReservationsComponent implements OnInit {

  reservations: CustomerReservations[];
  emailAddressText: string;
  firstNameText: string;
  lastNameText: string;

  constructor(private carServiceService: CarServiceService, private reservatioService: ReservationServiceService, private router: Router) { }

  ngOnInit() {
  }

  getReservationsByCustomer(event){
    this.carServiceService.getReservationsByCustomer(this.emailAddressText, this.firstNameText, this.lastNameText).subscribe(data => {
		  this.reservations = data;
    });
  }
  deleteReservation(id:string) {
    
    this.reservatioService.deleteReservation(id)
  }

}

  
	
 