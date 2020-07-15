import { Component } from '@angular/core';
// import { fadeAnimation } from './_animations/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './_animations/route.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'timokoendev';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
