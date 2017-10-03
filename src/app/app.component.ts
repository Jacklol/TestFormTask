import { Component, Inject, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <search
      (onSubmit)="addItem($event)">
      </search>
      <firebase [eventEmitter]="eventEmitter"></firebase>
    </div>
 `,
})
export class AppComponent {
  eventEmitter = new EventEmitter<string>();
  addItem(newName: string) {
    this.eventEmitter.emit(newName);
  }
}