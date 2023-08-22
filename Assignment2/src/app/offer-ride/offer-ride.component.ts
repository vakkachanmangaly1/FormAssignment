import { Component } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup,ValidationErrors,Validators}from '@angular/forms';

function seatsAvailableValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value !== null && (isNaN(value) || value < 0 || value > 8)) {
    return { seatsAvailable: true };
  }
  return null;
}

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})


export class OfferRideComponent {
  constructor(private fb:FormBuilder){}
  registrationForm = this.fb.group({
    name:['',Validators.required],
    startLocation:['',Validators.required],
    destination:['',Validators.required],
    car:['',Validators.required],
    seatsAvailable:['',[Validators.required,seatsAvailableValidator]],
  })

  get seatsAvailableControl(){
    return this.registrationForm.get('seatsAvailable');
  }
}
