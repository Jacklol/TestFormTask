import { Http } from "@angular/http";
import {Injectable } from "@angular/core";

@Injectable()
export class DataService {
    constructor(private http:Http){ }
        fetchData(){
            return this.http.get("https:")
        }
   
}
