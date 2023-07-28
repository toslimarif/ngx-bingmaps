# Bing Maps - Angular

A simple and modular library for displaying Bing Maps inside an angular application.

The library is designed to be lightweight, relying on the official [Bing Maps V8 Web Control](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/?redirectedfrom=MSDN) SDK as a dependency. Its purpose is to alleviate the challenges of integrating Bing Maps into your Angular Projects.

Head to the [PlayGround](https://toslimarif.com/projects/ngx-bingmaps/playground) for a brief demonstration of the capabilities of `ngx-bingmaps`.

## Table of Contents

- [Bing Maps - Angular](#bing-maps---angular)
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
    <ngx-bingmaps [apiKey]="apiKey" [geoLoc]="geoLoc"></ngx-bingmaps>
    ```
   For `apiKey` use the key acquired in the [Prerequisites](#prerequisites) section. The `geoLoc` represents a property that consists of latitude and longitude. For a complete list of properties, please consult the [Properties](#properties) section.

## Properties

Defines the input properties of the component.

| Name     | Type                        | Default | Description                                                 |
|----------|-----------------------------|---------|-------------------------------------------------------------|
| `apiKey` | string                      | null    | Your Bing Maps API key                                      |
| `geoLoc` | [GeoLocModel](#geolocmodel) | null    | Custom type comprising of latitude and longitude            |
| `height` | string                      | "100%"  | The map defaults to 100% height and width of parent element |
| `width`  | string                      | "100%"  | The map defaults to 100% height and width of parent element |



## Types

Defines the custom types used by the library.

### GeoLocModel
```typescript
{
    latitude: number;
    longitude: number;
}
```

## Examples

In Progress - Coming Soon
