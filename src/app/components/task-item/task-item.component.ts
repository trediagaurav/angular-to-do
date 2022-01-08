import { ConstantPool } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDelTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDel(task: any) {
    this.onDelTask.emit(task);
  }
  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }
}
