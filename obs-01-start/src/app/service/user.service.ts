import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // event emitter method
  // activatedEmitter = new EventEmitter<boolean>()

  // subject method (recommended)
  // - more efficient
  // - ability to use operators
  // NOTE:
  //   Using Subject instead of EventEmitter: only for cross-component where you manually call next/emit
  //   Not for @Output
  activatedEmitter = new Subject<boolean>()

  constructor() { }
}
