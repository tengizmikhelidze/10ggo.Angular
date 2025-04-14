import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShrinkSidebarService {
  shrunk = signal<boolean>(false);

  shrink(): void {
    this.shrunk.set(true);
  }

  unShrink(): void {
    this.shrunk.set(false);
  }

  toggle() {
    if(this.shrunk()) {
      this.unShrink()
    } else this.shrink()
  }
}
