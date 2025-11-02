import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { USERS } from './fake_users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,User,Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson-2');
  USERS=USERS;
  selectedUser: typeof USERS[0] | null = null;

  onUserSelected(id:string)
  {
    this.selectedUser=USERS.find(item=>item.id===id)! 
    console.log('selected user', this.selectedUser)
  }

}
