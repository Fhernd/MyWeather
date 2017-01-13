import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import {
    WeatherPage
} from '../weather/weather';

import {
    WeatherService
} from '../../app/services/weather.service';

@Component({
    selector: 'settings',
    templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit {

    searchStr: string;
    results: any;
    defaultCity: any;

    constructor(public navCtrl: NavController,
        private weatherService: WeatherService) {

    }

    ngOnInit() {
        this.getDefaultCity();
    }

    getQuery(){
        this.weatherService.searchCities(this.searchStr)
            .subscribe(res => {
                this.results = res.RESULTS;
            })
    }

    getDefaultCity(){
        if (localStorage.getItem("city") !== null){
            this.defaultCity = JSON.parse(localStorage.getItem("city")).name;
        } else{
            this.defaultCity = '';
        }
        
    }

    setDefaultCity(city){
        this.results = [];

        if(typeof(Storage) !== "undefined"){
            localStorage.setItem("city", JSON.stringify(city));
            this.searchStr = city.name;
            this.getDefaultCity();
        } else {
            console.log("LocalStorage Not Supported");
        }
    }

    saveChanges(){
        this.navCtrl.setRoot(WeatherPage);
    }
}
