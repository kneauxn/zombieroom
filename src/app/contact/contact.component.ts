import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  // I think I need to define the model before using this.
  // contact: contact = new contact();

  constructor() { }

  ngOnInit():void {
    this.contactForm = new FormGroup({
      email: new FormControl(),
      promotions: new FormControl(true),
      comment: new FormControl(),
      Select: new FormControl()
    });
  }
}
