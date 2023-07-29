import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NgxBingmapsService {
  private promise: any;
  private readonly window: any;
  constructor(@Inject(DOCUMENT) private _documentRef: Document) {
    this.window = this._documentRef.defaultView;
  }

  public load() {
    // First time 'load' is called?
    if (!this.promise) {
      // Make promise to load
      this.promise = new Promise((resolve) => {
        // Set callback for when bing maps is loaded.
        if (this.window) {
          this.window['__onBingLoaded'] = () => {
            resolve('Bing Maps API loaded');
          };
        }

        const node = this._documentRef.createElement('script');
        node.src =
          'https://www.bing.com/api/maps/mapcontrol?callback=__onBingLoaded&branch=release';
        node.type = 'text/javascript';
        node.async = true;
        node.defer = true;
        // _documentRef.getElementsByTagName('head')[0].appendChild(node);
        this._documentRef.getElementsByTagName('head')[0].appendChild(node);
      });
    }
    // Always return promise. When 'load' is called many times, the promise is already resolved.
    return this.promise;
  }
}
