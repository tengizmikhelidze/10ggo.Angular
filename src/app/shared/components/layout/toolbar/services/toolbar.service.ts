import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private defaultTitle = 'Default Title';
  private titleSubject = new BehaviorSubject<string>(this.defaultTitle);
  title$ = this.titleSubject.asObservable();

  setTitle(title: string): void {
    this.titleSubject.next(title);
  }

  resetTitle(): void {
    this.titleSubject.next(this.defaultTitle);
  }
}
