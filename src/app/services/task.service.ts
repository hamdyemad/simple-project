import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  tasks: Array<Task> = [
    {
      name: 'bot',
      description: '1'
    }
  ]


  // Add Task from add-task

  addTask(name: string, description: string) {
    this.tasks.push({
      name,
      description
    })
  }

  // Delte Task From Home Component

  delete(i) {
    this.tasks.splice(i, 1);
  }

  // Edit Task From task Comp

  editTask(i, data) {
    this.tasks[i] = data;
  }


  constructor() { }
}
