import { Component, Input } from '@angular/core';
import { TaskModel } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  constructor(private tasksService: TasksService) {}
@Input({required: true}) task!: TaskModel;

onCompleteTask() {
  this.tasksService.onCompleteTask(this.task.id);
}

}
