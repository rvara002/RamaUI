import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map } from 'rxjs/operators';



@Injectable()
export class LoginService {
    userName: any;
    private dashboardChangedSource = new BehaviorSubject(this.userName);
    public dashboardChanged$ = this.dashboardChangedSource.asObservable();



    constructor(private http: Http
    ) { }


    sendUsername(data: any) {
        this.dashboardChangedSource.next(data);
        console.log('usernameentered', data)
    }
}


