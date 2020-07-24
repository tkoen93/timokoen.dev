import { Component, OnInit } from '@angular/core';
import { faIcons } from '../_models/fa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faIcons = faIcons;

  constructor() { }

  ngOnInit(): void {
  }

}
