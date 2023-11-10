import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LatLng, LatLngTuple, Map, map, tileLayer } from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private readonly Default_LATLNG: LatLngTuple = [23.7104, 90.40744];

  @ViewChild('map', { static: true })
  mapRef!: ElementRef;
  map!: Map;
  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    if (this.map) return;
    this.map = map(this.mapRef.nativeElement, {
      attributionControl: false,
    }).setView(this.Default_LATLNG, 10);
    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
  }
}
