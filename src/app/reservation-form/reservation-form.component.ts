import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
  // standalone: false,
})
export class ReservationFormComponent {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private rs:ReservationService,private router:Router) { } // Dependency injection
  // when the component is created, Angular will inject an instance of FormBuilder into the component's constructor
  // FormBuilder is a service that provides convenient methods for generating form controls
  //reservation service is injected into the component's constructor


  ngOnInit():void {
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required,Validators.email]],
    })
  }


  onSubmit() {
    if (this.reservationForm.invalid) return console.warn('Invalid form');
    let newRservation = (this.reservationForm.value);
    console.log(newRservation);
    this.rs.addReservation(newRservation);
    this.reservationForm.reset();
    
    this.router.navigate(['/all']);

  }
}
