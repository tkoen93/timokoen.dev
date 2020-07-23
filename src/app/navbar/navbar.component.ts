import { Component, OnInit, Input } from '@angular/core';
import { faHouseDamage, faAddressCard, faBriefcase, faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavBarModel } from '../_models/navbar.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger(
      'showHideFaIcons',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('600ms ease-out',
              style({ opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('600ms ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class NavbarComponent implements OnInit {

  @Input() navType: string;

  selectedRoute: string = "Home";
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  showNavIcons: boolean = false;

  navItems: NavBarModel[] = [
    { icon: faHouseDamage, route: '/', name: 'Home' },
    { icon: faAddressCard, route: '/about', name: 'About Me' },
    { icon: faBriefcase, route: '/projects', name: 'Portfolio' },
    { icon: faIdCardAlt, route: '/contact', name: 'Contact' }
  ];

  constructor(private router: Router,
              private location: Location) {
                router.events.subscribe(val => {
                  if (location.path() != "") {
                    this.selectedRoute = location.path();
                    this.showNavIcons = true;
                  } else {
                    this.selectedRoute = "/";
                    this.showNavIcons = false;
                  }
                });
              }

  ngOnInit(): void {
  }

}
