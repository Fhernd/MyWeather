import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import {
  WeatherPage
} from '../weather/weather';
import {
  SettingsPage
} from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tabWeatherApp: any = WeatherPage;
  tabSettings: any = SettingsPage;
  
  constructor() {

  }
}
