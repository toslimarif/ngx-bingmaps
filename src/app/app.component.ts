import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  geoLoc = {
    latitude: 12.971599,
    longitude: 77.594566,
  };
  apiKey = '<YOUR_API_KEYS_GOES_HERE>';
}
