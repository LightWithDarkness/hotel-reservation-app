import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  private reservations: Reservation[] = [];

  //CRUD
  getAllReservations(): Reservation[] {
    return this.reservations;
  }
  getReservationById(id: string) {
    return this.reservations.find(rsv => rsv.id === id)
  }
  addReservation(reservation: Reservation) {
    this.reservations.push(reservation);
  }
  deleteReservation(id: string) {
    this.reservations = this.reservations.filter(rsv => rsv.id !== id);
  }
  updateReservation(reservation: Reservation) {
    this.reservations = this.reservations.map(rsv => rsv.id === reservation.id ? reservation : rsv)
  }

}
