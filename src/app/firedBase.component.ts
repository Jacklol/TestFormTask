import { Component, Inject, OnInit, Input, EventEmitter, Output, } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DataBaseService } from './dataBaseService';
@Component({
  selector: 'firebase',
  templateUrl: "./html/firedBase.component.html",
  styleUrls: ["./css/firedBase.component.css"]
})

export class FirebaseComponent {
  items: FirebaseListObservable<any[]>;
  @Input() eventEmitter: EventEmitter<string>;
  constructor(private svc: DataBaseService) {
  }
  addItem(newName: string) {
    this.svc.addItem(newName);
  }
  deleteItem(key: string) {
    this.svc.deleteItem(key);
  }
  ngOnInit() {
    this.items = this.svc.getData();
    this.eventEmitter.subscribe(item => this.addItem(item))
  }
}