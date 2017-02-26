import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'

import { Comment } from './comment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  comment: Comment = new Comment();

  ngOnInit():void {
    // make this neater by using the FormGroup directive's .group() method. Then add validators
    this.contactForm = this.formBuilder.group ({
      name: [],
      email: [],
      promotions: [true],
      comment: [],
      Select: [2]
    });
  }

  constructor(private formBuilder: FormBuilder) { }

}
