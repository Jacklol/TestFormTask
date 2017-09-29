import { Component, Inject, OnInit, } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `
 
  <form [formGroup]="textForm" (ngSubmit)="submit($event)">
  <div class="form-group">
    <label for="exitPrice">Exit Price</label>
    <input 
     formControlName="exitPrice"
     id="exitPrice"
     type="text"
     class="form-control">
  </div>
  <button>отправить</button>
<div class="alert alert-danger" *ngIf="exitPrice.touched && exitPrice.invalid">
  <div *ngIf="exitPrice.errors.required">Position must atleast</div>
</div>
</form>
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  data = null;
  textForm = new FormGroup({
    exitPrice: new FormControl('', [
      Validators.required, Validators.minLength(2), Validators.maxLength(100)])
  });

  get exitPrice() {
    return this.textForm.get("exitPrice");
  }

  submit(event: Event) {
    event.preventDefault();

    console.log(this.textForm);
    if (this.textForm.invalid) {
      console.log("this.textForm.invalid")
      return false;
    }
    this.data = this.textForm.value.exitPrice;
    // todo: send data to server
    console.log(this.data);
    console.log("todo: send data to server");
  }
  ngOnInit() {
    this.textForm.statusChanges.subscribe((status) => {
      if (status === 'INVALID' && !!this.data) {
        this.data = null;
      }
    });
  }

}