import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Make sells', description: 'Sell 500 bags', category: 'Work', status: 'Pending', deadline: new Date() },
    { id: 2, title: 'Go to Iftar with friends', description: 'Invite friends to Shafran', category: 'Personal', status: 'Pending', deadline: new Date() },
    { id: 3, title: 'Get ready for comp networks midterm', description: 'Do Netacad modules 1-10', category: 'Study', status: 'Pending', deadline: new Date() }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  updateTaskStatus(id: number, status: 'Pending' | 'Completed'): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.status = status;
  }
}
