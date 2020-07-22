import { Component, OnInit } from '@angular/core';
import { faHouseDamage, faAddressCard, faBriefcase, faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faHouseDamage = faHouseDamage;
  faIdCardAlt = faIdCardAlt;
  faAddressCard = faAddressCard;
  faBriefcase = faBriefcase;

  selectedRoute: string = "Home";

  constructor(private router: Router,
              private location: Location) {
                router.events.subscribe(val => {
                  if (location.path() != "") {
                    this.selectedRoute = location.path();
                  } else {
                    this.selectedRoute = "Home";
                  }
                });
              }

  ngOnInit(): void {
  }

}
