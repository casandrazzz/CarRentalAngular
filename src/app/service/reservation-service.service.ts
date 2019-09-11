import { Injectable } from '@angular/core';
import { Car } from '../model/car';
import { Reservation } from '../model/reservation';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  car : Car;
  pickUpDate: string;
  returnDate: string;
  private reservationsUrl: string;

  constructor(private http:HttpClient, private router: Router) {
    this.reservationsUrl = 'http://localhost:8080/reservations'
   }

  public addReservation(reservation: Reservation){
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post<Reservation>(this.reservationsUrl, reservation)

    .subscribe(  res =>    this.router.navigate(['reservations']));
  }

  public deleteReservation (id: string){
    return this.http.delete(this.reservationsUrl + "/" + id).subscribe()
  }

  public calculatePrice(picUpDate: string, returnDate: string, vehicleType: string) {
    return this.http.get(this.reservationsUrl + "/price?pickUpDate=" + picUpDate + "&returnDate="+returnDate+"&vehicleType="+vehicleType);
  }
}
