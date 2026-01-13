import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) userId!: string
  @Input() name: string | undefined;
  isAddingTask: boolean = false;
  tasks = dummyTasks;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
