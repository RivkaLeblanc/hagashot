import { Component, Input, Output, EventEmitter } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})

export class User {

  selectedUser = USERS[0];
  @Input() name!: string;
  @Input() avatar!: string;
  @Input({ required: true }) id!: string
  @Output() userSelected = new EventEmitter<string>();


  get userImgPath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  showUser() {
    this.userSelected.emit(this.id)
  }
}
