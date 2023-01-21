import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import { DailyCricketMatchDetails } from './daily-cricket-match-details';

@Injectable({providedIn: 'root'})
export class DailyCricketService {

  private dailyCricketTokenUrl = "https://dailycricket.com.bd/api/token"

  private dailyCricketMatchListUrl = "https://dailycricket.com.bd/live/matches?per_page=10&paged=1&token=a54368b21fc2588be28c797bb27bc5cd"

  constructor(private http: HttpClient) {}

  getToken(): Observable<HttpResponse<string>> {
    return this.http.get<string>(this.dailyCricketTokenUrl, {observe: 'response'});
  }

  getDailyCricketMatchDetails(status: number): Observable<HttpResponse<DailyCricketMatchDetails>> {
    return this.http.get<DailyCricketMatchDetails>(this.dailyCricketMatchListUrl + '&status=' + status, {observe: 'response'});
  }
}
