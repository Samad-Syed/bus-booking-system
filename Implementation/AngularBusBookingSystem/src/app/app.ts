import {Component} from "@angular/core";


interface Bus {
  name: string;
  source: string;
  destination: string;
  departure: string;
  arrival: string;
  distanceKm: number;
  fare: number;
  frequency: string;
  view_seats: string[];
}


@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl:"./app.css"
})


export class App{
  allBuses:Bus[] = [
    {
      name:'TSRTC Express',
      source: "Hyderabad",
      destination: "Bangalore",
      departure: "10:00 PM",
      arrival: "08:00 PM",
      distanceKm: 566,
      fare: 850,
      frequency: "Daily",
      view_seats: ['S11','S12','S27']
    },
    {
      name: 'Deccan Night Rider',
      source: 'Hyderabad',
      destination: 'Bangalore',
      departure: '08:30 PM',
      arrival: '06:00 PM',
      distanceKm: 566,
      fare: 750,
      frequency: 'Daily',
      view_seats: ['S11', 'S2', 'S17']
    },

    {
      name: 'Southern Star Travels',
      source: 'Hyderabad',
      destination: 'Bangalore',
      departure: '09:15 AM',
      arrival: '06:00 AM',
      distanceKm: 566,
      fare: 950,
      frequency: 'Daily',
      view_seats: []
    },

    {
      name: 'Midnight Express',
      source: 'Hyderabad',
      destination: 'Mumbai',
      departure: '11:30 PM',
      arrival: '09:00 PM',
      distanceKm: 566,
      fare: 800,
      frequency: 'Daily',
      view_seats: ['S1', 'S2', 'S7']
    }

  ];
  buses:Bus[] = [];
  errorMessage = '';
  hasSearched = false;

  searchBuses(source: string, destination: string) {

    this.hasSearched = true;
    this.errorMessage = '';

    if (source.trim().toLowerCase() === destination.trim().toLowerCase()) {
      this.buses = [];
      this.errorMessage = 'Source and destination must be different.';
      return;
    }

    this.buses = this.allBuses.filter(bus => bus.source.toLowerCase()===source.toLowerCase() && bus.destination.toLowerCase()=== destination.toLowerCase());
  }

}