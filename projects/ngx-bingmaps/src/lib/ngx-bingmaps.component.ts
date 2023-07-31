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

  setMapView(map: any, pushpins: PushpinModel[]) {
    // Set up the Map Options
    const options: any = {};
    // Add the Pushpins
    if (pushpins && pushpins.length) {
      const pinsOnMap = pushpins.map(
        (pushpin) =>
          new Microsoft.Maps.Pushpin(pushpin.location, pushpin.options),
      );
      // Infobox and it's click handler
      pushpins.forEach((pushpin, index) => {
        if (pushpin.infobox) {
          const infobox = new Microsoft.Maps.Infobox(
            pinsOnMap[index].getLocation(),
            pushpin.infobox,
          );
          infobox.setMap(map);
          Microsoft.Maps.Events.addHandler(
            pinsOnMap[index],
            'click',
            function (args: any) {
              infobox.setOptions({
                location: args.target.getLocation(),
                title: pushpin.infobox?.title,
                description: pushpin.infobox?.description,
                visible: true,
              });
            },
          );
        }
      });

      map.entities.push(pinsOnMap);
      // Get the bound for best
      options.bounds = Microsoft.Maps.LocationRect.fromLocations(
        pushpins.map((pin) => pin.location),
      );
    }
    options.mapTypeId = Microsoft.Maps.MapTypeId[this.mapType];
    map.setView(options);
  }
}
