import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from 'C:/Users/Casandra/car-rental/src/app/model/car';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';
import { CustomerReservations } from '../model/customer-reservations.model';
 
@Injectable()
export class CarServiceService  {
 
  private carsUrl: string;
  private filterUrl : string;
  private reservationsUrl: string
 
  constructor(private http: HttpClient) {
    this.carsUrl = 'http://localhost:8080/cars?';
    this.filterUrl = 'http://localhost:8080/filter?';
    this.reservationsUrl = 'http://localhost:8080/reservations?';
	  
  }

  public getAvailableCarReservationDto(pickUp:string, returnDate:string): Observable<Car[]> {
    let dates: string;
    dates = "pickUpDate=" + pickUp + "&returnDate=" + returnDate;
    return this.http.get<Car[]>(this.carsUrl+dates);
  }
  public filterAvailableCars(pickUp:string, returnDate:string, vehicleType: string, transmission: string): Observable<Car[]> {
    let dates: string;
    dates = "pickUpDate=" + pickUp + "&returnDate=" + returnDate;
    let criteria: string;
    criteria = "&vehicleType" + vehicleType + "&transmission=" + transmission;
    return this.http.get<Car[]>(this.filterUrl+dates+criteria);
  }

  public getReservationsByCustomer(emailAddress: string, firstName: string, lastName: string ){
   let customerCriteria: string;
   customerCriteria ="emailAddress=" + emailAddress + "&firstName=" + firstName + "&lastName=" + lastName;
   return this.http.get<CustomerReservations[]>(this.reservationsUrl+customerCriteria);
  }

};
