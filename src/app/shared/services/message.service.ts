import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];
  constructor() { }

  update(msg: Message) {
    this.messages = [msg];
    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  setSuccess(msg: string) {
    this.update({severity:'success', summary:'Success', detail:msg})
  }

  setError(msg: string) {
    this.update({severity:'error', summary:'Error', detail:msg})
  }

  clear() {
    this.messages = [];
  }
}
