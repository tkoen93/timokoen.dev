import { Component, OnInit } from '@angular/core';
import { faHouseDamage, faAddressCard, faBriefcase, faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavBarModel } from '../_models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedRoute: string = "Home";

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
                  } else {
                    this.selectedRoute = "/";
                  }
                });
              }

  ngOnInit(): void {
  }

}
