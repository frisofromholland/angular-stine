import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Result } from '../../beans/result';


@Injectable()
export class MessagesService {

  messages: String[] = [];

  constructor() { }


  addMessage(result: Result): void {
    if (result.code == 1) {
      this.messages.push('Goed gedaan');
    } else {
      this.messages.push('Jammer, nog een keer');
    }
  }

  retrieveMessages(): Observable<String[]> {
    return of(this.messages);
  }

}
