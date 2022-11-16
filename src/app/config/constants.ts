import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
  public readonly API_ENDPOINT: string = 'http://cool-kids.thebigdev.com/';
  public readonly API_MOCK_ENDPOINT: string = 'http://127.0.0.1:8000/';
}
