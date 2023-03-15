import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { BookingService } from '../services/booking.service';


export interface Flight {
flightNumber:string
origin:string
destination:string
departureTime:Date
arrivalTime:Date
seatsAvailable:number
seatCost:number
}

@Component({
  selector: 'app-flights-table',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.css']
})
export class TopnavComponent {
  constructor(private bookingService: BookingService) {}
  search!: string;

  onKey(event: any) { // without type info
    this.getTopSellers(event.target.value); // returns
  }

  flights: any = []
  isLoading = false;

  displayedColumns: string[] = ['FlightNumber', 'Origin', 'Destination', 'DepartureTime', 'ArrivalTime', 'SeatsAvailable', 'SeatCost'];
  dataSource = new MatTableDataSource<Flight>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  async getTopSellers(search: string){
    this.isLoading = true;
    this.flights = await this.bookingService.getFlights
    this.dataSource.data = this.flights;
    this.isLoading = false;
  }
}
