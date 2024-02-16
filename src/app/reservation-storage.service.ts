import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationStorageService {
  private readonly storageKey = 'reservations';

  constructor() { }

  saveReservations(reservations: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(reservations));
  }

  getReservations(): any[] {
    const reservationsString = localStorage.getItem(this.storageKey);
    return reservationsString ? JSON.parse(reservationsString) : [];
  }
}