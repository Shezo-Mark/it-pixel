import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private toggleClassSubject = new BehaviorSubject<boolean>(false);
  toggleClass$ = this.toggleClassSubject.asObservable();

  toggleAsideClass(): void {
    const currentState = this.toggleClassSubject.value;
    this.toggleClassSubject.next(!currentState);
  }
  constructor() { }
}
