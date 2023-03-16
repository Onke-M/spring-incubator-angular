import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  flights: any;
  booking:any;
  flightsURL = "http://localhost:8202/flights"
  bookingURL = "http://localhost:8201/bookings"

  constructor(private httpClient: HttpClient) { }



  async getFlights(){
    const endPointToHit = this.flightsURL
      let httpCall = this.httpClient.get<any>(endPointToHit);
      let results = (await lastValueFrom(httpCall));

      this.flights = results;
      return this.flights;
    }

    async createBooking(flightID:number){
    const endPointToHit = this.bookingURL
      let httpCall = this.httpClient.post<any>(
        `${endPointToHit}/?customerID=${1}&flightID=${flightID}`,
        null
      );
      let results = await lastValueFrom(httpCall);
  
        this.booking = results;
        return this.booking;
      }
}
