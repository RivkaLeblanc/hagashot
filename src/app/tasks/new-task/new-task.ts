import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  title= ""
  summary=""
  due_date=""

  onSubmit(form: NgForm){
  console.log(form)
  }
}
