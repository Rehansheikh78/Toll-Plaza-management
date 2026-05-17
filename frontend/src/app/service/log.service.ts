import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable(
    {
        providedIn: "root"
    }
)

export class LogService {
    apiUrl = "http://localhost:3000/logs";

    constructor(private http: HttpClient)
    {
    }

    // GET /logs: Fetch all toll records
    getLogs()
    {
        return this.http.get(this.apiUrl);
    }

    //add vehicle
    addLog(data:any)
    {
        return this.http.post(this.apiUrl, data);
    }
}