import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MycustomerrorValidators } from './mycustomerror.validators';

@Component({
  selector: 'myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent{
  form;
  
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
    name: ['', [Validators.minLength(5),
                Validators.required,
                MycustomerrorValidators.cannotContainSpace,
                ]], //import class for Validator
    contact: fb.group({
     email: '',
     phone: ''
    }),
    topics: fb.array([]),
    test: ''

  })
    
  }
  
  addTopic(topic: HTMLInputElement){
   this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  
  deleteTopic(index){
   
  // let index = this.topics.controls.indexOf(topic);
  // console.log(index);
    this.topics.removeAt(index);
  }
  
  get topics(){
    return this.form.get("topics") ; // as FormsArray;
  }
  
  get name(){
    return this.form.get("name");
  }
  
  }
