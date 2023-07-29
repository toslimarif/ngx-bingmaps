import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PushpinModel, PushpinOptionsModel } from './ngx-bingmaps.models';
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
        min-height: 250px;
      }
    `,
  ],
})
export class NgxBingmapsComponent {
  @ViewChild('myMap') mapViewChild: ElementRef | undefined;
  // Bing API key
  @Input() apiKey: string | undefined;

  @Input() hideRoadLabels: boolean = false;
  @Input() mapType: 'road' | 'aerial' | 'birdseye' = 'road';
  @Input() navigationBarMode: 'compact' | 'square' = 'square';
  @Input() set pushpins(pushpins: PushpinModel[]) {
    this.initMap(pushpins);
  }
  @Input() pushpinOptions: PushpinOptionsModel = {
    enableHoverStyle: true,
    enableClickedStyle: true,
  };

  constructor(private bingMap: NgxBingmapsService) {}

  initMap(pushpins: PushpinModel[]) {
    this.bingMap.load().then(() => {
      const map = this.getMap();
      this.setMapView(map, pushpins);
    });
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

  addPushpins(
    map: any,
    pushpins: PushpinModel[],
    options: PushpinOptionsModel,
  ) {
    // Clear all existing pushpins
    for (let pushpin of pushpins) {
      const pushpinOnMap = new Microsoft.Maps.Pushpin(pushpin.location);
      pushpinOnMap.setOptions(pushpin.options);
      map.entities.push(pushpinOnMap);
    }
  }

  setMapView(map: any, pushpins: PushpinModel[]) {
    this.addPushpins(map, pushpins, this.pushpinOptions);
    const options: any = {};
    if (this.mapType) {
      options.mapTypeId = Microsoft.Maps.MapTypeId[this.mapType];
    }
    if (this.hideRoadLabels) {
      options.labelOverlay = Microsoft.Maps.LabelOverlay.hidden;
    }
    map.setView(options);
  }
}
