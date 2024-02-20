
import { Component, OnInit } from '@angular/core';
import { ReservationStorageService } from '../reservation-storage.service';
import { Reserva } from '../reservation/reservation.interface';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{
  
  reservas: Reserva[] =[];
  bookTitle: string = "";
  customerName: string = "";
  date: Date = new Date();
  reserva1: Observable<Reserva[]>;

  

  constructor(private reservationStorageService: ReservationStorageService) {
    this.reservas = this.reservationStorageService.getReservations();
    this.reservas.push(
      { id: 1, bookTitle: 'Libro 1', customerName: 'Cliente 1', date: new Date() },
      { id: 2, bookTitle: 'Libro 2', customerName: 'Cliente 2', date: new Date() },
      { id: 3, bookTitle: 'Libro 3', customerName: 'Cliente 3', date: new Date() }
    );
    this.reserva1 = of(this.reservas);
  }

  ngOnInit(): void {
    this.reserva1.subscribe((reservations: Reserva[]) => console.log(this.reservas));
  }
  onSubmit(): void {
    const newReservation : Reserva ={
      id: this.reservas.length + 1,
      bookTitle: this.bookTitle,
      customerName: this.customerName,
      date: this.date
    };
    this.reservas.push(newReservation);
    this.reservationStorageService.saveReservations(this.reservas);

    this.bookTitle = "";
    this.customerName = "";
    this.date = new Date();
  }

  deleteReservation(index: number): void {
    this.reservas.splice(index, 1);
    this.reservationStorageService.saveReservations(this.reservas);
  }
}


