import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common'
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true, 
  templateUrl: './task-list.component.html',
  imports: [CommonModule, TaskItemComponent],
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  markTaskCompleted(id: number) {
    this.taskService.updateTaskStatus(id, 'Completed');
    this.tasks = this.taskService.getTasks(); 
  }
}
