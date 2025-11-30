import { Component } from '@angular/core';
import { 
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})
export class NewUser {

  categories = ["work", "personal", "urgent"];

  form = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    }),

    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', { validators: passwordsMatch }),
    }),

    categories: new FormArray(
      this.categories.map(() => new FormControl(false))
    )
  });

  submit() {
    console.log(this.form.value);
  }

  showNewUser = false;

openNewUser() {
  this.showNewUser = true;
}

closeNewUser() {
  this.showNewUser = false;
}


}

function passwordsMatch(group: AbstractControl) {
  const p = group.get('password')?.value;
  const c = group.get('confirmPassword')?.value;
  return p === c ? null : { mismatch: true };
}
