import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  public getTableData (): Observable<any> {
    let params = new HttpParams();
    let headers = new HttpHeaders 
    let req = new HttpRequest<any>(
      "GET",
      'http://usweb.dotomi.com/resources/wfs/cookies.json',
      {
        headers: headers,
        params: params,
      }
    );

    return this.http.request<any>(req);
  }
}
