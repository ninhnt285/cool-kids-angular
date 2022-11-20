import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from 'rxjs';

import { MessageService } from "../message.service";
import { ApiService } from "../shared/services/api.service";

export interface AuthUser {
  token?: string;
  name?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user = new BehaviorSubject<any>({});
  readonly user$ = this._user.asObservable();

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getMe();
  }

  getMe() {
    this.apiService.get("users/me")
      .subscribe((data) => {
        console.log(data.data);
        this._user.next(data.data);
      });
  }

  login(email: string, password: string): Observable<AuthUser> {
    return this.apiService.post("login", {email, password})
      .pipe(map(data => {
        let token = data.data.token;
        // Update token for APIService singleton
        this.apiService.updateToken(token)
        // Load user info
        this.getMe();
        return data.data;
      }));
  }

  register(formData) {
    console.log(formData);
  }

  logout() {
    
  }
}
