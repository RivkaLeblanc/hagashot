import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-tasks',
  imports: [],
  template:`<p>Hello {{userName}}!</p>`,
  // templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
 @Input() userName: string = '';
 
}
