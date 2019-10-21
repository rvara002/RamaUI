import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { Http, Response } from "@angular/http";


@Injectable()
export class EventService {

    constructor(private http: Http) {

    }

    public getJSON(): Observable<any> {
        return this.http.get("../../assets/hr.json").pipe(map((res: any) => res.json()));
    }

    public getJSONpe(): Observable<any> {
        return this.http.get("../../assets/pe.json").pipe(map((res: any) => res.json()));
    }

    public getJSONit(): Observable<any> {
        return this.http.get("../../assets/it.json").pipe(map((res: any) => res.json()));
    }

    public getJSONfinance(): Observable<any> {
        return this.http.get("../../assets/finance.json").pipe(map((res: any) => res.json()));
    }

    saveNew(obj) {
        var URL = "../../assets/" + obj.department_name + ".json"
        return this.http.post(URL, { obj }).pipe(map((res: Response) => res.json()));

    }
}