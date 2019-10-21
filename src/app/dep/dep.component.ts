import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/service/event.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css']
})
export class DepComponent implements OnInit {
  result: any;
  isHrselected = true;
  isItselected = false;
  isPeselected = false;
  searchEvent: string = "";
  isFinanceselected: boolean = false;


  constructor(public eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.getUpcomingeventshr();
  }

  getUpcomingeventshr() {
    this.isHrselected = true;
    this.isItselected = false;
    this.isPeselected = false;
    this.isFinanceselected = false;
    this.eventService.getJSON().subscribe(result => {

      this.result = result;
    })

  }

  getUpcomingeventspe() {
    this.isHrselected = false;
    this.isItselected = false;
    this.isPeselected = true;
    this.isFinanceselected = false;
    this.eventService.getJSONpe().subscribe(result => {

      this.result = result;

    })

  }

  getUpcomingeventsit() {
    this.isHrselected = false;
    this.isItselected = true;
    this.isPeselected = false;
    this.isFinanceselected = false;
    this.eventService.getJSONit().subscribe(result => {

      this.result = result;
    })

  }

  getUpcomingeventsfinance() {
    this.isHrselected = false;
    this.isItselected = false;
    this.isPeselected = false;
    this.isFinanceselected = true;
    this.eventService.getJSONfinance().subscribe(result => {

      this.result = result;
    })

  }

  editEvent(eventDetails, deptId) {
    const eve = {...eventDetails, department_id: deptId}
    sessionStorage.setItem("edit", JSON.stringify(eve));
    this.router.navigate(["edit", deptId]);
  }
}








