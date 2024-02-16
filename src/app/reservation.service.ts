import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'URL_del_backend'; // Reemplaza esto con la URL real de tu backend

  constructor(private http: HttpClient) { }

  createReservation(reservationData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/reservations`, reservationData);
  }

  getReservations(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/reservations`);
  }

  deleteReservation(reservationId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/reservations/${reservationId}`);
  }

  updateReservation(reservationId: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/reservations/${reservationId}`, updatedData);
  }
}