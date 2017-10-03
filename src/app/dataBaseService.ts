import { Inject, OnInit, EventEmitter, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataBaseService {
  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/Items', {
      query: {
        orderByChild: 'reverseDate',
      }
    });
  }
  getData() {
    return this.items;
  }
  addItem(newName: string) {
    var newDate = new Date();
    var newDateInMiliS = newDate.getTime();
    var reverseDate = 0 - newDateInMiliS;
    this.items.push({ text: newName, date: newDateInMiliS, reverseDate: reverseDate });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
}