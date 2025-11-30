import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { USERS } from './user/fake_users';
import { Task } from './tasks/task/task';
import { NewUser } from './new-user/new-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,User,Tasks,NewUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson-2');
  users=USERS;
  selectedUser?:any;

  onUserSelected(id:string)
  {
    this.selectedUser=this.users.find(item=>item.id===id)! 
    console.log('selected user', this.selectedUser)
  }


}
