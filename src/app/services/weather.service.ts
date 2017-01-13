import{
    Injectable
} from '@angular/core';
import {
    Http
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{

    apiKey: string;
    conditionsUrl: string;
    searchUrl: string;
    
    constructor(private http: Http){
        this.apiKey = 'c2e809073c1964fa';
        this.conditionsUrl = `http://localhost:8100/api/${this.apiKey}/conditions/q`;
        this.searchUrl = 'http://localhost:8100/search/aq?query=';
    }

    getWeather(zmw){
        return this.http.get(this.conditionsUrl + '/zmw:' + zmw + '.json')
            .map(
                res => res.json()
            );
    }

    searchCities(searchStr){
        return this.http.get(this.searchUrl + '' + searchStr)
            .map(res => res.json());
    }
}