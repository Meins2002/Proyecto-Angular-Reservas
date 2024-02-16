// Parte 2 Formulario/ parte 4 inyeccion de dependencias
import { Component } from '@angular/core';
import { ReservationStorageService } from '../reservation-storage.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations: any[];
  bookTitle: string = "";
  customerName: string = "";
  date: Date = new Date();

  constructor(private reservationStorageService: ReservationStorageService) {
    this.reservations = this.reservationStorageService.getReservations();
  }

  onSubmit(): void {
    const newReservation = {
      bookTitle: this.bookTitle,
      customerName: this.customerName,
      date: this.date
    };
    this.reservations.push(newReservation);
    this.reservationStorageService.saveReservations(this.reservations);

    this.bookTitle = "";
    this.customerName = "";
    this.date = new Date();
  }

  deleteReservation(index: number): void {
  
    this.reservations.splice(index, 1);
    this.reservationStorageService.saveReservations(this.reservations);
  }
}


