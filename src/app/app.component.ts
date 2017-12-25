import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm : FormGroup;
  
  constructor(private fb : FormBuilder){
    this.contactForm = fb.group({
      'name': [null, Validators.required],
      'address': [null, Validators.required],
      'email': [null, Validators.required]
    })

  }

  onSubmit(value){
    console.log(value);
  }
}
