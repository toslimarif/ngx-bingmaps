import { Component } from '@angular/core';
import { MapTypes, NavigationBarModes, PushpinModel } from 'ngx-bingmaps';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected readonly window = window;

  apiKey: string;
  mapType: keyof typeof MapTypes;
  navigationBarMode: keyof typeof NavigationBarModes;
  mapTypes: string[] = Object.keys(MapTypes);
  navigationBarModes: string[] = Object.keys(NavigationBarModes);
  pushpins: PushpinModel[];

  configForm: FormGroup;
  pushpinsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.apiKey = '<YOUR_API_KEY_HERE>';
    this.mapType = 'road';
    this.navigationBarMode = 'square';
    this.pushpins = [];
    this.configForm = this.formBuilder.group({
      mapType: [this.mapType],
      navigationBarMode: [this.navigationBarMode],
    });
    this.pushpinsForm = this.formBuilder.group({
      location: this.formBuilder.group({
        latitude: [null, Validators.required],
        longitude: [null, Validators.required],
      }),
      options: this.formBuilder.group({
        text: [null],
        title: [null],
        subTitle: [null],
      }),
    });
  }

  onConfigChange() {
    if (!this.configForm.valid) return;
    const { mapType, navigationBarMode } = this.configForm.value;
    this.mapType = mapType;
    this.navigationBarMode = navigationBarMode;
  }

  onAddPushpin() {
    if (!this.pushpinsForm.valid) return;
    this.pushpins = [...this.pushpins, this.pushpinsForm.value];
    this.pushpinsForm.reset();
  }
}
