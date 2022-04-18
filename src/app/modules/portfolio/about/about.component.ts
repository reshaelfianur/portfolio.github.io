import { Component, OnInit } from '@angular/core';
import * as awesome from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public mapMarker: any;
  public building: any;
  public mobile: any;
  public email: any;
  public birthday: any;
  public badge: any;
  public home: any;

  public birthDate: Date = new Date('1994-11-06');
  public age: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.mapMarker = awesome.faMapMarker;
    this.building = awesome.faCity;
    this.email = awesome.faMailBulk;
    this.mobile = awesome.faMobile;
    this.birthday = awesome.faBirthdayCake;
    this.badge = awesome.faGraduationCap;
    this.home = awesome.faLaptopHouse;

    this.CalculateAge();
  }

  CalculateAge(): void {
    if (this.birthDate) {
      this.age = Math.floor(Math.abs(Date.now() - new Date(this.birthDate).getTime()) / (1000 * 3600 * 24) / 365.25);
    }
  }

}
