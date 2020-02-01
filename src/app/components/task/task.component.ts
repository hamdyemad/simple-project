import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task;
  taskParam;
  taskId;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.taskParam = this.route.snapshot.paramMap.get('id'); // param info
    this.taskId = this.taskParam - 1; // Index of task
    this.task = this.taskService.tasks[this.taskId]; // data of task
  }

  // Delte Task by genertate delete method
  deleteTask() {
    this.taskService.delete(this.taskId);
    this.router.navigate(['']);
  }

  // Edit Task
  editTask() {
    this.taskService.editTask(this.taskId, this.task);
    this.router.navigate(['']);
  }

}
