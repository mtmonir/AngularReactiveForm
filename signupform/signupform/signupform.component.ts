import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent {

 
     form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl()
  });
onSubmit(){
console.log(this.form);
}
 
}
