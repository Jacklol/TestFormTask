import { Component, Inject, OnInit, } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = null;
  textForm = new FormGroup({
    exitPrice: new FormControl('', [
      Validators.required, Validators.minLength(2), Validators.maxLength(100)])
  });
  items: FirebaseListObservable<any[]>;
  submitting = false;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/Items', {
      query: {
        orderByChild: 'reverseDate',
      }
    });
  }
  get exitPrice() {
    return this.textForm.get("exitPrice");
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
  submit(event: Event) {
    event.preventDefault();
    if (this.textForm.invalid) {
      this.submitting = true;
      return false;
    }
    this.data = this.textForm.value.exitPrice;
    this.addItem(this.data);
  }
  ngOnInit() {}
}