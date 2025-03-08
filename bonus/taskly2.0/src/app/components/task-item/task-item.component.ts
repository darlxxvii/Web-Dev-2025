import { Component, EventEmitter, Output, Input } from '@angular/core';
import { BaseTaskComponent } from '../base-task.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent extends BaseTaskComponent {
  @Input() override task: any = {};
  @Output() taskCompleted = new EventEmitter<number>();

  markAsCompleted() {
    this.taskCompleted.emit(this.task.id);
  }
}
