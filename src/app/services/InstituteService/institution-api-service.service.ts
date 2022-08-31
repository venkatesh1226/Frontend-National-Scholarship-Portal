import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstituteReg } from 'src/app/Models/instituteReg';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InstitutionApiServiceService {

  _url = 'http://localhost:8008/institution';

  constructor(private _http:HttpClient) { }

  register(instData: InstituteReg):Observable<InstituteReg>
  {
    return this._http.post<InstituteReg>(this._url, instData);
  }
}
