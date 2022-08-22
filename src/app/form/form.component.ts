import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    }),
    email: new FormControl(),
    password: new FormControl(),
    language: new FormControl()
  });

  readonly langs: string[] = [
    'English',
    'French',
    'German'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
