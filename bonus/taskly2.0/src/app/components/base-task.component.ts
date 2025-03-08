import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  template: '',
})
export abstract class BaseTaskComponent {
  @Input() task!: Task;
}
