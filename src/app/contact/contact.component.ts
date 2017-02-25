import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'

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
    this.contactForm = new FormGroup({
      email: new FormControl(),
      promotions: new FormControl(true),
      comment: new FormControl(),
      Select: new FormControl()
    });
  }

  constructor() { }

}
