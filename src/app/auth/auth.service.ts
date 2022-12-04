import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from 'rxjs';

import { ApiService } from "../shared/services/api.service";
import { MessageService } from "../shared/services/message.service";
import { User } from "../shared/models/user.model";

export interface AuthUser {
  token?: string;
  name?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user = new BehaviorSubject<any>(null);
  readonly user$ = this._user.asObservable();
  
  public loggedIn = false
  public user: User = null

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getMe();
  }

  getMe() {
    this.apiService.get("users/me")
      .subscribe(
        (data) => {
          this._user.next(data.data);
          this.user = data.data
        },
        (err) => {
          this.loggedIn = false
          this.user = null
        }
      );
  }

  updateMe(data) {
    return this.apiService.put("users/me", data)
      .pipe(map(res => {
        this.getMe();
      }));
  }

  login(email: string, password: string): Observable<AuthUser> {
    return this.apiService.post("login", {email, password})
      .pipe(map(res => {
        let token = res.data.token;
        // Update token for APIService singleton
        this.apiService.updateToken(token)
        // Load user info
        this.getMe();
        return res.data;
      }));
  }

  register(userData) {
    return this.apiService.post("register", userData)
      .pipe(map(res => {
        let token = res.data.token;
        // Update token for APIService singleton
        this.apiService.updateToken(token)
        // Load user info
        this.getMe();
        return res.data;
      }));
  }

  logout() {
    this.user = null
    this._user.next(null)
    this.apiService.updateToken("")
  }
}
