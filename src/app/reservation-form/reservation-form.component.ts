import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
  // standalone: false,
})
export class ReservationFormComponent {
  reservationForm: FormGroup = new FormGroup({
    // firstName: new FormControl(''),
    // lastName: new FormControl(''),
    // address: new FormGroup({
    //   street: new FormControl(''),
    //   city: new FormControl(''),
    //   state: new FormControl(''),
    //   zip: new FormControl(''),
    // }),
  });;

  onSubmit() {
    console.warn(this.reservationForm.value);
  }
}
