import { Component } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})

export class User {
    selectedUser = USERS[0];     // המשתמש הראשון במערך
  

get userImgPath() {
  return 'assets/users/' + this.selectedUser.avatar;
  }
changeUser(){
  const randomIndex = Math.floor(Math.random() * USERS.length);
  this.selectedUser = USERS[randomIndex]; 
}
}
