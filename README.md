# Bing Maps - Angular

A simple and modular library for displaying Bing Maps inside an angular application.

The library is designed to be lightweight, relying on the official [Bing Maps V8 Web Control](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/?redirectedfrom=MSDN) SDK as a dependency. Its purpose is to alleviate the challenges of integrating Bing Maps into your Angular Projects.

Head to the [PlayGround](https://toslimarif.github.io/ngx-bingmaps/) for a brief demonstration of the capabilities of `ngx-bingmaps`.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
- [Types](#types)
- [Examples](#examples)


## Prerequisites

To utilize this library completely, you will need a Bing Maps API key. You can acquire a free API key for testing or development purposes by visiting the [Bing Maps Dev Center](https://www.bingmapsportal.com).


## Installation

`npm` is the easiest and fastest way to get started using `ngx-bingmaps`
```
npm install ngx-bingmaps --save
```


## Usage

To incorporate the library into your Angular Project, simply follow the instructions provided below.
1. Add the `NgxBingmapsModule` into your project's module `imports`
    ```typescript
    import { NgxBingmapsModule } from 'ngx-bingmaps';
    
    @NgModule({
     // ...
     imports: [
       // ...
       NgxBingmapsModule
     ]
    })
    ```
2. Use the `ngx-bingmaps` in your angular components HTML as below.
    ```html
    <ngx-bingmaps [apiKey]="apiKey" [pushpins]="pushpins"></ngx-bingmaps>
    ```
   For `apiKey` use the key acquired in the [Prerequisites](#prerequisites) section. The `pushpins` variable represents an array of object of type [PushpinModel](#pushpinmodel). For a complete list of properties, kindly refer to the [Properties](#properties) section.


## Properties

Defines the input properties of the component.

| Name                | Type                                         | Default  | Description                                                                                                                                                                                                                                                                                                                                                   |
|---------------------|----------------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `apiKey`            | string                                       | null     | Your Bing Maps API key.                                                                                                                                                                                                                                                                                                                                       |
| `height`            | string                                       | "100%"   | The map defaults to 100% height and width of parent element.                                                                                                                                                                                                                                                                                                  |
| `mapType`           | string                                       | "road"   | This enumeration is used to specify the type of map style that should be displayed by the map. Such as `aerial`, `birdseye`, and `road` etc. <br/> For all available options please refer: [Bing Maps V8 Web Control - MapTypeId Enumeration](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/maptypeid-enumeration)                |
| `navigationBarMode` | string                                       | "square" | The NavigationBarMode can be used to customize the layout and style of the navigation bar. Such as `compact`, `minified`, and `square` etc. <br/> For all available options please refer: [Bing Maps V8 Web Control - NavigationBarMode Enumeration](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/navigationbarmode-enumeration) |
| `pushpins`          | array of type [PushpinModel](#pushpinmodel)  | `[]`     | Pushpins, are the markers used for marking location(s) on the map.                                                                                                                                                                                                                                                                                            |
| `width`             | string                                       | "100%"   | The map defaults to 100% height and width of parent element.                                                                                                                                                                                                                                                                                                  |



## Types

Defines the custom types used by the library.

### PushpinModel

Pushpins, sometimes also referred to as markers or MapIcons on other mapping platforms, are one of the primary ways of marking a location on a map.
The `PushpinModel` has the following properties.

| Name       | Type                                                       | Default | Description                                                    |
|------------|------------------------------------------------------------|---------|----------------------------------------------------------------|
| `location` | object of type [GeolocationModel](#geolocationmodel)       | null    | The geolocation for the pushpin on Map.                        |
| `options`  | object of type [PushpinOptionsModel](#pushpinoptionsmodel) | null    | Various options available for creating personalized pushpins.  |
| `infobox`  | object of type [PushpinInfoboxModel](#pushpininfoboxmodel) | null    | Various options available for creating personalized infoboxes. |


### GeolocationModel

GeolocationModel represents the coordinate information needed to mark locations on a map. The `GeolocationModel` consists of two properties: latitude and longitude.

The `latitude` property is used to represent how far north or south a location is. This value is an angle measured around the center of the earth from the equator towards the poles. A positive value is in the northern hemisphere and a negative value is in the southern hemisphere. This value has a range of -90 to 90 degrees however due to the mathematics involved in representing the spherical globe as a flat 2D map, some calculations approach infinity as you approach polar latitudes. To avoid this, Bing Maps and many other mapping platforms that use the Mercator projection system clip the latitude coordinates to approximately -85 and 85 degrees.

The `longitude` property stores the angle of horizontal offset from the prime meridian (0 degrees). This property has a value between -180 and 180 degrees.

| Name         | Type   | Description                    |
|--------------|--------|--------------------------------|
| `latitude`   | number | The latitude of the location.  |
| `longitude`  | number | The longitude of the location. |


### PushpinOptionsModel

The following pushpin option properties can be used to create customized pushpins.

| Name                 | Type     | Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|----------------------|----------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `color`              | string   | null       | Specifies what color to make the default pushpin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `cursor`             | string   | "pointer"  | The css cursor to show when pushpin has mouse events on it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `draggable`          | boolean  | null       | A boolean indicating whether the pushpin can be dragged to a new position with the mouse or by touch.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `enableClickedStyle` | boolean  | null       | Specifies whether to enable the clicked style on the pushpin. To unselect a pushpin, simply click it again. Alternatively, you can disable then re-enable this property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `enableHoverStyle`   | boolean  | null       | Specifies whether to enable the hover style on the pushpin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `icon`               | string   | null       | Defines the the icon to use for the pushpin. This can be a URL to an Image or SVG file, an image data URI, or an inline SVG string. <br /><br />  **Tip:** When using inline SVG, you can pass in placeholders `{color}` and `{text}` in your SVG string. This placeholder will be replaced by the pushpins color or text property value when rendered. <br /><br /> **Note:** SVG’s are converted into a static image before being rendered as a pushpin. As such embedded images should use data URI’s and not links to files as the file will not load before the SVG is rendered. CSS classes are also not supported on SVG’s, however inline styles are. |
| `subTitle`           | string   | null       | A secondary title label value to display under the pushpin. Uses label collision detection. This label automatically changes color between white and dark grey depending on which map style is selected. Requires the title label to be set.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `title`              | string   | null       | The title label value to display under the pushpin. This label automatically changes color between white and dark grey depending on which map style is selected. Pushpin Titles support label collision detection, as described below.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `text`               | string   | null       | A short string of text that is overlaid on top of the pushpin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `visible`            | boolean  | `true`     | A boolean indicating whether to show or hide the pushpin. The default value is true. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

These options are derived, and subset of [Bing Maps V8 Web Control - PushpinOptions Object](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/pushpinoptions-object).


### PushpinInfoboxModel

The following infobox option properties can be used to create customized infoboxes.

| Name              | Type     | Default | Description                                                                                                                                                                                                                                                                                                 |
|-------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `closeDelayTime`  | number   | 0       | The number of milliseconds to wait before closing an infobox when the visible option is changed from true to false.                                                                                                                                                                                         | 
| `description`     | string   | null    | The string displayed inside the infobox.                                                                                                                                                                                                                                                                    |
| `htmlContent`     | string   | null    | The HTML that represents the infobox. Note that some infobox options are ignored if custom HTML is set (title, description, maxHeight, maxWidth, actions, showCloseButton, showPoint). Also, if custom HTML is used to represent the infobox, the infobox is anchored at the top-left corner.               |
| `maxHeight`       | number   | **126** | The maximum size that the infobox height can expand to based on it’s content.                                                                                                                                                                                                                               |
| `maxWidth`        | number   | **256** | The maximum size that the infobox width can expand to based on it’s content.                                                                                                                                                                                                                                |
| `showCloseButton` | boolean  | `true`  | A boolean indicating whether to show the close dialog button on the infobox. By default, the close button is displayed as an X in the top right corner of the infobox. This property is ignored if custom HTML is used to represent the infobox.                                                            |
| `showPointer`     | boolean  | `true`  | A boolean indicating whether to display the infobox with a pointer. In this case the infobox is anchored at the bottom point of the pointer. If this property is set to false, the infobox is anchored at the bottom left corner. This property is ignored if custom HTML is used to represent the infobox. |
| `title`           | string   | null    | The title of the infobox.                                                                                                                                                                                                                                                                                   |
| `visible`         | boolean  | `true`  | A boolean indicating whether to show or hide the infobox. A value of false indicates that the infobox is hidden, although it is still an entity on the map.                                                                                                                                                 |
| `zIndex`          | number   | null    | The z-index of the infobox with respect to other items on the map.                                                                                                                                                                                                                                          |

These options are derived, and subset of [Bing Maps V8 Web Control - InfoboxOptions Object](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/infoboxoptions-object).


## Examples

In Progress - Coming Soon
