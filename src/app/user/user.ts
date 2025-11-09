import { Component, Input, Output, EventEmitter } from '@angular/core';
import { USERS } from './fake_users';
import { UserObj } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})

export class User {

  selectedUser = USERS[0];
  @Input() user!: UserObj;
 
  @Input({required: true }) isSelected!:boolean;
  @Output() userSelected = new EventEmitter<string>();




  get userImgPath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  showUser() {
    this.userSelected.emit(this.user.id)
  }
}
