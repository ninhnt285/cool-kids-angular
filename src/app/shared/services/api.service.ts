import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: string = ""
  apiUrl: string = environment.apiUrl
  httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.token = localStorage.getItem("token") ?? ""
  }

  updateToken(token: string) {
    // Save to localStorage
    localStorage.setItem("token", token);
    // Update token
    this.token = token;
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
  }

  generateEndpoint(endpoint: string) {
    return this.apiUrl + endpoint;
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(
      this.generateEndpoint(url),
      { headers: this.httpHeaders }
    );
  }

  post(url: string, body: any = {}): Observable<any> {
    return this.httpClient.post(
      this.generateEndpoint(url),
      body,
      { headers: this.httpHeaders }
    )
  }

  put(url: string, body: any = {}): Observable<any> {
    return this.httpClient.put(
      this.generateEndpoint(url),
      body,
      { headers: this.httpHeaders }
    )
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(
      this.generateEndpoint(url),
      { headers: this.httpHeaders }
    );
  }
}
