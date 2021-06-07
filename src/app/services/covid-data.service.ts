import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BedSvcResponse, CovidSvcResponse } from '../models/regionalData';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {
  stateWiseData = 'https://api.rootnet.in/covid19-in/stats/latest';
  bedInfo = 'https://api.rootnet.in/covid19-in/hospitals/beds';
  constructor(private httpClient: HttpClient) { }

  getCases() {
    return this.httpClient.get<CovidSvcResponse>(this.stateWiseData);
  }

  getBedInfo() {
    return this.httpClient.get<BedSvcResponse>(this.bedInfo);
  }

}
