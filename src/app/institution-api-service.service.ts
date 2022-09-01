import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InstitutionApiServiceService {

  _url = 'http://localhost:5000/institution';

  constructor(private _http:HttpClient) { }

  register(instData: any)
  {
    console.log(instData);
    return this._http.post<any>(this._url, instData);
  }
}
