import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public isOpen = new BehaviorSubject<boolean>(false);
  public opened = false;

  constructor() { }

  public toogle() {
    this.opened = !this.opened;
    this.isOpen.next(this.opened);
  }
}
