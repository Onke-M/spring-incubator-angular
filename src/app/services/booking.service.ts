import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  flights: any;
  flightsURL = "https://localhost:8202/api/flights"

  constructor(private httpClient: HttpClient) { }

  async getFlights(){
    const endPointToHit = this.flightsURL
      let httpCall = this.httpClient.get<any>(endPointToHit);
      let results = (await lastValueFrom(httpCall));

      this.flights = results;
      return this.flights;
    }
}
