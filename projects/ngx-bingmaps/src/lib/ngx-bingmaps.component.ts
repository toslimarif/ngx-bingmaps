import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PushpinModel } from './ngx-bingmaps.models';
import { NgxBingmapsService } from './ngx-bingmaps.service';
import { MapTypes, NavigationBarModes } from './ngx-bingmaps.types';

declare const Microsoft: any;

@Component({
  selector: 'ngx-bingmaps',
  template: `<div #ngxBingMaps class="map-container"></div>`,
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
        min-height: 250px;
      }
    `,
  ],
})
export class NgxBingmapsComponent implements OnChanges {
  @ViewChild('ngxBingMaps') mapViewChild: ElementRef | undefined;
  // Bing API key
  @Input() apiKey: string | undefined;
  @Input() mapType: keyof typeof MapTypes = 'road';
  @Input() navigationBarMode: keyof typeof NavigationBarModes = 'square';
  @Input() pushpins: PushpinModel[] = [];

  isMapReady: boolean = false;

  constructor(private bingMap: NgxBingmapsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      // If the Map is Already Loaded then just Reinitialize it
      if (this.isMapReady) return this.initMap();
      // Otherwise Load the map and Reinitialize it
      this.bingMap.load().then(() => {
        this.isMapReady = true;
        this.initMap();
      });
    }
  }

  initMap() {
    const map = this.getMap();
    this.setMapView(map, this.pushpins);
  }

  getMap() {
    return new Microsoft.Maps.Map(this.mapViewChild?.nativeElement, {
      credentials: this.apiKey,
      navigationBarMode:
        Microsoft.Maps.NavigationBarMode[this.navigationBarMode],
      supportedMapTypes: [
        Microsoft.Maps.MapTypeId.road,
        Microsoft.Maps.MapTypeId.aerial,
        Microsoft.Maps.MapTypeId.birdseye,
      ],
    });
  }

  addPushpins(map: any, pushpins: PushpinModel[]) {
    // Clear all existing pushpins
    for (let pushpin of pushpins) {
      const pushpinOnMap = new Microsoft.Maps.Pushpin(pushpin.location);
      pushpinOnMap.setOptions(pushpin.options);
      map.entities.push(pushpinOnMap);
    }
  }

  setMapView(map: any, pushpins: PushpinModel[]) {
    // Add the Pushpins if there is
    this.addPushpins(map, pushpins);
    // Set up the Map Options
    const options: any = {};
    options.mapTypeId = Microsoft.Maps.MapTypeId[this.mapType];
    map.setView(options);
  }
}
