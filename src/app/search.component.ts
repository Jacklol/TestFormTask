import { Input, Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
@Component({
  selector: 'search',
  templateUrl: "./html/search.component.html",
   styleUrls: ["./css/search.component.css"]
})
export class SearchComponent {
  data = null;
  textForm = new FormGroup({
    exitPrice: new FormControl('', [
      Validators.required, Validators.minLength(2), Validators.maxLength(100)])
  });
  submitting = false;
  constructor() {
  }
  @Output() onSubmit = new EventEmitter<string>();
  submit(event: Event) {
    event.preventDefault();
    if (this.textForm.invalid) {
      this.submitting = true;
      return false;
    }
    this.data = this.textForm.value.exitPrice;
    this.onSubmit.emit(this.data);
  }
  get exitPrice() {
    return this.textForm.get("exitPrice");
  }
  ngOnInit() {
  }
}