import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    displayMessage: any;



    constructor(public loginService: LoginService) {
        this.loginService.dashboardChanged$.subscribe(e => this.displayMessage = e);
        console.log('display', this.displayMessage)

    }

    ngOnInit() {
        console.log("City Component Init");
    }

}
