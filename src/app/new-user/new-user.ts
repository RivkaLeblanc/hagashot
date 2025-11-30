import { Component,Output, EventEmitter } from '@angular/core';
import { 
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';
import { UserObj } from '../user/user.model';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})
export class NewUser {

@Output()  addNewUser =new EventEmitter<UserObj>();
@Output()  addingNewUserForm=new EventEmitter<boolean>();


  categories = ["work", "personal", "urgent"];

  form = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    }),

    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }, { validators: passwordsMatch }),

    categories: new FormArray(
      this.categories.map(() => new FormControl(false))
    )
  });

  submit() {
    this.form.markAllAsTouched();
  
    const formValue = this.form.value;
  
    const user: UserObj = {
      id: Date.now().toString(36),
      name: `${formValue.name?.firstName??''} ${formValue.name?.lastName??''}`.trim(),
      avatar: ''
    };
  
    this.addNewUser.emit(user);
  }
  

  get firstNameRequired() {
    return this.form.get('name.firstName')?.touched &&
           this.form.get('name.firstName')?.hasError('required');
  }
  
  get firstNamePassedMax() {
    return this.form.get('name.firstName')?.touched &&
           this.form.get('name.firstName')?.hasError('maxlength');
  }
  
  get lastNameRequired() {
    return this.form.get('name.lastName')?.touched &&
           this.form.get('name.lastName')?.hasError('required');
  }
  
  get lastNamePassedMax() {
    return this.form.get('name.lastName')?.touched &&
           this.form.get('name.lastName')?.hasError('maxlength');
  }
  
  get emailRequired() {
    return this.form.get('email')?.touched &&
           this.form.get('email')?.hasError('required');
  }
  
  get emailInvalid() {
    return this.form.get('email')?.touched &&
           this.form.get('email')?.hasError('email');
  }
  
  get passwordMinLength(): boolean | undefined {
    return this.form.get('password.password')?.touched &&
           this.form.get('password.password')?.hasError('minlength');
  }
  
  get confirmPasswordMinLength(): boolean | undefined {
    return this.form.get('password.confirmPassword')?.touched &&
           this.form.get('password.confirmPassword')?.hasError('minlength');
  }
  
  cancel()
  {

  }

}

function passwordsMatch(group: AbstractControl) {
  const p = group.get('password')?.value;
  const c = group.get('confirmPassword')?.value;
  return p === c ? null : { mismatch: true };
}

