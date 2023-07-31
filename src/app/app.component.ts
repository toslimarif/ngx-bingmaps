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
    this.apiKey = 'YOUR_API_KEY_HERE';
    this.mapType = 'aerial';
    this.navigationBarMode = 'square';
    // Initiate the Pushpins with 7 Wonders of the World(New)
    this.pushpins = [
      {
        location: {
          latitude: 40.4319,
          longitude: 116.5704,
        },
        options: {
          title: 'The Great Wall of China',
          subTitle: 'Huairou, China',
          enableClickedStyle: true,
          enableHoverStyle: true,
          color: '#673ab7',
        },
        infobox: {
          title: 'The Great Wall of China',
          description:
            'The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.',
          visible: false,
        },
      },
      {
        location: {
          latitude: 20.6843,
          longitude: -88.5678,
        },
        options: {
          title: 'Chichén Itzá',
          subTitle: 'Yucatan, Mexico',
          enableClickedStyle: true,
          enableHoverStyle: true,
          color: '#673ab7',
        },
        infobox: {
          title: 'Chichén Itzá',
          description:
            "Chichén Itzá is a complex of Mayan ruins on Mexico's Yucatán Peninsula. A massive step pyramid, known as El Castillo or Temple of Kukulcan, dominates the ancient city, which thrived from around 600 A.D. to the 1200s.",
          visible: false,
        },
      },
      {
        location: {
          latitude: 30.3285,
          longitude: 35.4444,
        },
        options: {
          title: 'Petra',
          subTitle: 'Petra, Jordan',
          enableClickedStyle: true,
          enableHoverStyle: true,
          color: '#673ab7',
        },
        infobox: {
          title: 'Petra',
          description:
            "Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom.",
          visible: false,
        },
      },
      {
        location: {
          latitude: -13.2263,
          longitude: -72.4973,
        },
        options: {
          title: 'Machu Picchu',
          subTitle: 'Cuzco, Peru',
          enableClickedStyle: true,
          enableHoverStyle: true,
          color: '#673ab7',
        },
        infobox: {
          title: 'Machu Picchu',
          description:
            'This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule.',
          visible: false,
        },
      },
      {
        location: {
          latitude: -22.9519,
          longitude: -43.2105,
        },
        options: {
          title: 'Christ the Redeemer',
          subTitle: 'Rio de Janeiro, Brazil',
          enableClickedStyle: true,
          enableHoverStyle: true,
          color: '#673ab7',
        },
        infobox: {
          title: 'Christ the Redeemer',
          description:
            'Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.”',
          visible: false,
        },
      },
      {
        location: {
          latitude: 41.8902,
          longitude: 12.4922,
        },
        options: {
          title: 'Colosseum',
          subTitle: 'Rome, Italy',
          enableClickedStyle: true,
          enableHoverStyle: true,
          color: '#673ab7',
        },
        infobox: {
          title: 'Colosseum',
          description:
            'The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults.',
          visible: false,
        },
      },
      {
        location: {
          // 27.1751° N, 78.0421° E
          latitude: 27.1751,
          longitude: 78.0421,
        },
        options: {
          title: 'Taj Mahal',
          subTitle: 'Agra, India',
          enableClickedStyle: true,
          enableHoverStyle: true,
          color: '#673ab7',
        },
        infobox: {
          title: 'Taj Mahal',
          description:
            'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz.',
          visible: false,
        },
      },
    ];

    // 12.9858° N, 77.7356° E
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
