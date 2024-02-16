// Parte 2 Formulario
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  bookTitle: string = " ";
  customerName: string = " ";
  date: Date = new Date ();

  onSubmit(): void {
    console.log('Formulario enviado');
    console.log('Título del libro:', this.bookTitle);
    console.log('Nombre del cliente:', this.customerName);
    console.log('Fecha:', this.date);
  }
}

