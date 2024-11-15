import { HttpClient } from "@angular/common/http"; 
import { Injectable } from "@angular/core"; 
import { Observable } from "rxjs"; 
@Injectable() 
export class ServiceCubos { 

     constructor(private _http: HttpClient){} 

     getCubos(): Observable<any> { 
     let request = "api/cubos"; 
     let url ="https://apitiendacubos2024a.azurewebsites.net/" + request; 
     return this._http.get(url); 

    } 

} 