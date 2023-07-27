import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GeoLocModel } from './ngx-bingmaps.model';
import { NgxBingmapsService } from './ngx-bingmaps.service';
declare const Microsoft: any;

@Component({
  selector: 'ngx-bingmaps',
  template: `<div #myMap class="map-container"></div>`,
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
        min-height: 200px;
      }
    `,
  ],
})
export class NgxBingmapsComponent implements OnChanges {
  @ViewChild('myMap') mapViewChild: ElementRef | undefined;
  @Input() geoLoc: GeoLocModel | undefined;
  @Input() apiKey: string | undefined;
  myMap: any;
  constructor(private bingMap: NgxBingmapsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['geoLoc']?.currentValue) {
      this.bingMap.load().then(() => {
        this.setMapView(changes['geoLoc'].currentValue);
      });
    }
  }
  setMapView(data: GeoLocModel) {
    const navigationBarMode = Microsoft.Maps.NavigationBarMode;
    this.myMap = new Microsoft.Maps.Map(this.mapViewChild?.nativeElement, {
      credentials: this.apiKey,
      navigationBarMode: navigationBarMode.compact,
      supportedMapTypes: [
        Microsoft.Maps.MapTypeId.road,
        Microsoft.Maps.MapTypeId.aerial,
      ],
    });
    this.myMap.setView({
      mapTypeId: Microsoft.Maps.MapTypeId.aerial,
      center: new Microsoft.Maps.Location(data.latitude, data.longitude),
    });
    const center = this.myMap.getCenter();
    const pushpin = new Microsoft.Maps.Pushpin(center);

    this.myMap.entities.push(pushpin);
    pushpin.setOptions({ enableHoverStyle: true, enableClickedStyle: true });
  }
}
