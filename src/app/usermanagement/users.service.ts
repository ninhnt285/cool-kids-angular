import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { User } from "src/app/shared/models/user.model";
import { ApiService } from "../shared/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users = new BehaviorSubject<User[]>([]);
  readonly users$ = this._users.asObservable();

  private users: User[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  getUsers() {
    return this.apiService.get("users")
      .pipe(map(res => {
        this._users.next(res.data);
        return res.data;
      }));
  }

  updateUser(id, role) {
    return this.apiService.put("users/" + id, {role})
      .pipe(map(res => {
        this.getUsers().subscribe(() => {});
        return res.data;
      }));
  }
}
