import { Component,Input } from '@angular/core';
import { fakeTasks } from './fake_tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';


@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  get userSelectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
    }

    
  tasks=fakeTasks;
  @Input() userId: string= '';
  @Input() userName: string = '';
  showAddNewTask=false;

  addNewTask(){
  this.showAddNewTask=true;
  }
 
}
