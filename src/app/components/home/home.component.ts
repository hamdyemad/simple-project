import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  taskServ

  constructor(private taskService: TaskService) {

    this.taskServ = this.taskService;
  }

  ngOnInit() {
  }

  delete(i) {
    this.taskServ.delete(i);
  }

}
