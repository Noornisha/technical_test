import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../constants';
//import { Http, RequestOptions, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

 
  userform(obj:any):Observable<any>{
    var url = GlobalConstants.API_URL + "admin/projects";
    let body = obj;
    return this.http.post(url,body);
  }
}
 