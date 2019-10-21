import { Component, OnInit } from '@angular/core';
import { Injectable, EventEmitter, ComponentFactoryResolver } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

import {LoginService} from '../service/login.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

userName: string;
password: string;



  cityList = [ { city_name: "Bandung", prov_name: "Jawa Barat" },
               { city_name: "Jakarta", prov_name: "DKI Jakarta" },
               { city_name: "Surabaya", prov_name: "Jawa Timur" },
               { city_name: "Yogyakarta", prov_name: "DI Yogyakarta" },
               { city_name: "Semarang", prov_name: "Jawa Tengah" },
               { city_name: "Medan", prov_name: "Sumatera Utara" },
               { city_name: "Tangerang", prov_name: "Banten" },
               { city_name: "Denpasar", prov_name: "Bali" },
               { city_name: "Makasar", prov_name: "Sulawesi Selatan" }];

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    console.log("City Component Init");
  }


sendUsername(){
  console.log('called')
  this.loginService.sendUsername(this.userName)
}


  



}
