import { Component, signal,Output,EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { USERS } from './user/fake_users';
import { Task } from './tasks/task/task';
import { NewUser } from './new-user/new-user';
import { UserObj } from './user/user.model';
import { Form } from '../../node_modules/@angular/forms/index';

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
  showNewUser=false;


  @Output()  addingNewUserForm=new EventEmitter<boolean>();

  onUserSelected(id:string)
  {
    this.selectedUser=this.users.find(item=>item.id===id)! 
    console.log('selected user', this.selectedUser)
  }

  userFormValue(user:UserObj )
  {
    this.users.push(user);
    this.users = [...this.users];
  
  }

  openNewUser(){
    this.showNewUser=true;
  }

  closeForm(state:boolean){
    this.showNewUser=state;
  }
  
  



}
