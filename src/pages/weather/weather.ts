import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import {
    WeatherService
} from '../../app/services/weather.service';

@Component({
    selector: 'weather',
    templateUrl: 'weather.html'
})
export class WeatherPage implements OnInit {

    weather: any;
    searchStr: string;
    results: any;
    zmw: any;

    constructor(public navCtrl: NavController, private weatherService: WeatherService) {
    }

    ngOnInit() {
        this.getDefaultCity();

        this.weatherService.getWeather(this.zmw)
            .subscribe(weather => {
                this.weather = weather.current_observation;
            });
    }

    getQuery() {
        this.weatherService.searchCities(this.searchStr)
            .subscribe(res => {
                this.results = res.RESULTS;
            });
    }

    chooseCity(city) {
        this.results = [];

        this.weatherService.getWeather(city.zmw)
            .subscribe(weather => {
                this.weather = weather.current_observation;
            });
    }

    getDefaultCity() {
        if (localStorage.getItem("city") !== null){
            this.zmw = JSON.parse(localStorage.getItem("city")).zmw;
        } else{
            this.zmw = '94125.1.99999';
        }
    }
}
