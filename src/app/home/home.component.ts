import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaModel } from '../_models/fa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faIcons: FaModel[] = [
    { icon: faGithub, url: 'https://github.com/tkoen93' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/timokoen/' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
