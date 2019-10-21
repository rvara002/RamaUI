import { Component, OnInit } from '@angular/core';

import { LoginService } from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from 'app/service/event.service';


@Component({
    selector: 'app-save',
    templateUrl: './saveEvent.component.html',
    styleUrls: ['./saveEvent.component.css']
})
export class saveEventComponent implements OnInit {


    training_name: string;
    description: string;
    duration: string;
    department_name: string;
    date_time: string;
    meeting_room: string;
    department_id: string;

    constructor(public eventService: EventService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        if (this.route.snapshot.paramMap.get("id")) {
            const editValues: any = JSON.parse(sessionStorage.getItem("edit"));
            this.training_name = editValues.training_name;
            this.description = editValues.description;
            this.duration = editValues.duration;
            this.department_name = editValues.department_name;
            this.date_time = editValues.date_time;
            this.meeting_room = editValues.meeting_room;
            this.department_id = editValues.department_id;
        }
    }


    savenewEvent() {

        if (!this.training_name && !this.department_name && !this.duration && !this.date_time && !this.meeting_room) {
            return;
        }

        const saveEvent = [

            { training_name: this.training_name },
            { description: this.description },
            { duration: this.duration },
            { department_name: this.department_name },
            { date_time: this.date_time },
            { meeting_room: this.meeting_room },
            { department_id: atob(this.department_name) }
        ];

        this.eventService.saveNew(saveEvent);
        this.router.navigate(["dep"]);

    }
}
